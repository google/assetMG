# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

""" server configuration for the assetMG tool"""
import json
from flask import Flask, request, jsonify, render_template
from googleads import adwords
from google.ads.google_ads.client import GoogleAdsClient
import app.backend.setup as setup
from app.backend.mutate import mutate_ad
from app.backend import structure
from app.backend.upload_asset import upload
from app.backend.service import Service_Class
from app.backend.yt_upload import initialize_upload
from app.backend.error_handling import error_mapping
from app.backend.get_yt import get_all_yt_videos, test_yt_credentials
from app.backend.helpers import populate_adgroup_details
from googleapiclient.discovery import build
from pathlib import Path
import copy
import logging
import yaml
from google_auth_oauthlib.flow import InstalledAppFlow, Flow
import webbrowser
import threading
import os
import shutil
from werkzeug.utils import secure_filename
import string
from google.cloud import storage
from app.backend.setup import CONFIG_PATH, CONFIG_PATH_GS, PREFIX, CLOUD_VERSION, BASE_URL, BUCKET_NAME
from app.backend.setup import YT_CONFIG_FILE_PATH, YT_CONFIG_FILE_PATH_GS, CONFIG_FILE_PATH,CONFIG_FILE_PATH_GS

# from flask_cors import CORS
# app = Flask(__name__)
# CORS(app)

app = Flask(__name__, static_url_path='',
            static_folder='app/asset_browser/frontend/dist/frontend',
            template_folder='app/asset_browser/frontend/dist/frontend')



UPLOAD_FOLDER = Path(PREFIX + 'uploads')
UPLOAD_FOLDER.mkdir(parents=True, exist_ok=True)


ALLOWED_EXTENSIONS = {'txt','png', 'jpg', 'jpeg', 'zip','gif'}
ALLOWED_DIMENSIONS = [(200,200), (240,400), (250,250), (250,360),
                      (300,250), (336,280), (580,400), (120,600),
                      (160,600), (300,600), (300,1050), (468,60),
                      (728,90), (930,180), (970,90), (970,250),
                      (980,120), (300,50), (320,50), (320,100)]

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#Only used in local version
LOGS_PATH = Path('app/logs/server.log')

YT_CLIENT_SCOPES = ['https://www.googleapis.com/auth/youtube.upload']

asset_to_ag_json_path = Path(PREFIX + 'cache/asset_to_ag.json')
account_struct_json_path = Path(PREFIX + 'cache/account_struct.json')
Path(PREFIX + 'cache').mkdir(parents=True, exist_ok=True)

if CLOUD_VERSION:
    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s:%(levelname)s:%(message)s')
else:
    logging.basicConfig(filename=LOGS_PATH,
                        level=logging.INFO,
                        format='%(asctime)s:%(levelname)s:%(message)s')


flow = None
ADWORDS_CLIENT = ''
GOOGLEADS_CLIENT = ''

def get_global_adwords_client():
    global ADWORDS_CLIENT
    if ADWORDS_CLIENT:
        return ADWORDS_CLIENT
    else:
        setup.set_api_configs()
        ADWORDS_CLIENT = adwords.AdWordsClient.LoadFromStorage(
            CONFIG_PATH / 'googleads.yaml')
        return ADWORDS_CLIENT

def get_global_googleads_client():
    global GOOGLEADS_CLIENT
    if GOOGLEADS_CLIENT:
        return GOOGLEADS_CLIENT
    else:
        setup.set_api_configs()
        GOOGLEADS_CLIENT = GoogleAdsClient.load_from_storage(
            CONFIG_PATH / 'google-ads.yaml')
        return GOOGLEADS_CLIENT

# check if config is valid. if yes, init clients and create struct
try:
    # Copy Google Storage file to tmp file
    setup.download_file_from_gcs(CONFIG_FILE_PATH_GS, CONFIG_FILE_PATH)
    with open(CONFIG_FILE_PATH, 'r') as f:
        config_file = yaml.load(f, Loader=yaml.FullLoader)
except FileNotFoundError:
    config_file = {'config_valid': 0}


if config_file['config_valid']:
    try:
        setup.download_file_from_gcs('account_struct.json', account_struct_json_path)
        setup.download_file_from_gcs('asset_to_ag.json', asset_to_ag_json_path)
        if CLOUD_VERSION and Path(account_struct_json_path).exists():
            get_global_googleads_client() # to initialize googleads.yaml file
            logging.info('Skipping structure creation on startup, since this is the cloud version')
        else:
            structure.create_mcc_struct(get_global_googleads_client(), account_struct_json_path, asset_to_ag_json_path)
    except Exception as e:
        logging.exception('Error when trying to create struct')
        Service_Class.reset_cid(get_global_adwords_client())


@app.route('/')
def upload_frontend():
    return render_template('index.html')


@app.route('/config/', methods=['GET'])
def get_configs():
    """return all config parameters"""
    try:
        setup.download_file_from_gcs(CONFIG_FILE_PATH_GS, CONFIG_FILE_PATH)
        with open(CONFIG_FILE_PATH, 'r') as fi:
            config = yaml.load(fi, Loader=yaml.FullLoader)
    except FileNotFoundError:
        config = {
            'client_customer_id': '',
            'client_id': '',
            'client_secret': '',
            'developer_token': '',
            'refresh_token': '',
            'config_valid': 0,
        }
    return _build_response(json.dumps(config))


@app.route('/set-configs/', methods=['POST'])
def set_secret():
    """gets client id, client secret, dev token, account id.
    Saves to config.yaml and returns refresh url"""
    data = request.get_json(force=True)

    # determines if a reset to prev valid config or trying to setup new config
    is_reset = True

    if not data.get('config_valid'):
        data['refresh_token'] = None
        data['config_valid'] = 0
        is_reset = False

    with open(CONFIG_FILE_PATH, 'w') as fi:
        yaml.dump(data, fi)
    setup.upload_file_to_gcs(CONFIG_FILE_PATH, CONFIG_FILE_PATH_GS)

    # If its just a reset - no need to generate a url
    if is_reset:
        return _build_response(msg=json.dumps(
            'successfully restored previous configs'), status=200)

    init_flow(
        client_id=data['client_id'],
        client_secret=data['client_secret']
    )

    return _build_response(msg=json.dumps(""), status=200)


def init_flow(from_client_config=False, client_id=None, client_secret=None):
    global flow
    try:
        if from_client_config:
            # Copy Google Storage file to tmp file if cloud version
            setup.download_file_from_gcs(CONFIG_FILE_PATH_GS, CONFIG_FILE_PATH)

            # Get credentials from config file
            with open(CONFIG_FILE_PATH, 'r') as f:
                config = yaml.load(f, Loader=yaml.FullLoader)
                client_id = config['client_id']
                client_secret = config['client_secret']

        client_config = {
            'web': {
                'client_id': client_id,
                'client_secret': client_secret,
                'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
                'token_uri': 'https://accounts.google.com/o/oauth2/token',
            }
        }
        flow = Flow.from_client_config(
            client_config=client_config,
            scopes=[
                'openid',
                'https://www.googleapis.com/auth/adwords',
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        )

        flow.redirect_uri = BASE_URL
        auth_url, _ = flow.authorization_url()
        status=200


    except Exception as e:
        logging.error(str(e))
        status=500
        auth_url = ''


@app.route('/get-refresh-token/', methods=['POST'])
def get_refresh_token():
    """Gets the refresh token from a given frontend refresh
    access token."""
    if not flow:
        init_flow(from_client_config=True)
        logging.info(flow)

    data = request.get_json(force=True)
    code = data['code']
    failed, refresh_token = setup.get_refresh_token(code, flow)

    if failed:
        return _build_response(
            msg=json.dumps('Could not get refresh token.'),
            status=500
        )

    return _build_response(
        msg=json.dumps(refresh_token),
        status=200
    )


@app.route('/set-refresh/', methods=['POST'])
def set_refresh_token():
    """Can only be called if set-configs was called before.
    Gets the refresh token and saves it to config.yaml
    If successful calls init_client()"""
    data = request.get_json(force=True)
    code = data['code']
    set_status, refresh_token = setup.set_refresh(code,flow)
    if set_status:
        # meaning that set_refresh failed
        return _build_response(msg=json.dumps(
            'could not update refresh token'), status=500)

    init_status = init_clients()

    if init_status:
        return _build_response(msg=json.dumps('config invalid'), status=500)
    else:
        return _build_response(msg=json.dumps(refresh_token),status=200)


@app.route('/yt-config/', methods=['GET'])
def get_yt_configs():
    """return all config parameters"""
    try:
        setup.download_file_from_gcs(YT_CONFIG_FILE_PATH_GS, YT_CONFIG_FILE_PATH)
        with open(YT_CONFIG_FILE_PATH, 'r') as fi:
            config = json.load(fi)
    except Exception as e:
        config = {
            'channel_id': '',
            'api_key': '',
        }

    return _build_response(json.dumps(config),status=200)


@app.route('/set-yt/', methods=['POST'])
def set_yt():
    """Set yt-conifg.json with channel id and API key.
    Will be used to get all the channel's videos. Gets a JSON with two keys:
    channel_id
    api_key
    """
    data = request.get_json(force=True)

    try:
        channel_id = data['channel_id']
        api_key = data['api_key']

        test_yt_credentials(channel_id,api_key)
        with open(YT_CONFIG_FILE_PATH, 'w') as f:
            json.dump({'channel_id':channel_id,'api_key':api_key},f)
        setup.upload_file_to_gcs(YT_CONFIG_FILE_PATH, YT_CONFIG_FILE_PATH_GS)
        return _build_response(status=200)

    except Exception as e:
        logging.exception(e)
        return _build_response(msg=json.dumps(str(e)), status=400)


# @app.route('/init-yt/', methods=['GET'])
# def init_yt():
#   """opens a browser with the login window. """
#   setup.set_yt_config()
#   yt_flow = InstalledAppFlow.from_client_secrets_file(
#     YT_CONFIG_FILE_PATH , YT_CLIENT_SCOPES)
#   credentials = yt_flow.run_local_app(host='localhost',
#     port=8080,
#     authorization_prompt_message='Please visit this URL: {url}',
#     success_message='The auth flow is complete; you may close this window.',
#     open_browser=True)
#   global yt_client
#   yt_client = build('youtube', 'v3', credentials = credentials)
#   return _build_response(status=200)


# @app.route('/upload-to-yt/', methods=['POST'])
# def upload_to_yt():
#   """Call this route to upload a video to YT.
#   Send a JSON with the following params:

#   file - str, path to the file to upload
#   title - str,
#   description - str, video description
#   category - str representing a number.
#   https://developers.google.com/youtube/v3/docs/videoCategories/list',
#   keywords - list,
#   privacyStatus - str, private/public/unlisted

#   Returns:
#   dict - {"vid_id" : id}
#   """
#   data = request.get_json(force=True)
#   if data.get('file') is None:
#     return _build_response(msg=json.loads('File not specified', status=404))
#   try:
#     vid_id = initialize_upload(
#       yt_client,**{k: v for k, v in data.items() if v is not None})
#     status=200
#     msg = {'vid_id' : vid_id}
#   except Exception as e:
#     msg = str(e)
#     logging.error(str(e))
#     status=500

#   return _build_response(msg = json.dumps(msg), status=status)


@app.route('/get-yt-videos/', methods=['GET'])
def get_yt_videos():
    try:
        videos = get_all_yt_videos()

    except Exception as e:
        logging.exception(e)
        return _build_response(msg=json.dumps(str(e)), status=400)

    return _build_response(msg=json.dumps(videos), status=200)


@app.route('/create-struct/', methods=['GET'])
def create_struct():
    msg = ''
    try:
        structure.create_mcc_struct(
            get_global_googleads_client(), account_struct_json_path, asset_to_ag_json_path)
        status=200
    except Exception as e:
        status=403
        msg = str(e)
        logging.exception(e)

    return _build_response(msg=msg,status=status)


@app.route('/accounts/', methods=['GET'])
def get_all_accounts():
    """gets all accounts under the configured MCC. name and id"""
    try:
        accounts = structure.get_accounts(get_global_googleads_client())
        return _build_response(msg=json.dumps(accounts), status=200)
    except Exception as e:
        return _build_response(msg=str(e), status=403)


@app.route('/account-ag-struct', methods=['GET'])
def get_account_ag_struct():
    """Get account's adgroups structure."""
    cid = request.args.get('cid')
    try:
        msg = json.dumps(structure.get_account_adgroup_structure(get_global_googleads_client(),cid))
        status = 200
    except Exception as e:
        logging.exception('could not get adgroup structure for ' + cid)
        msg = json.dumps('Could not get adgroup structure for' + cid + str(e))
        status = 500

    return _build_response(msg=msg, status=status)


@app.route('/accounts-assets/', methods=['GET'])
def accounts_assets():
    """if cid gets all its assets. else gets all accounts and their assets."""
    cid = request.args.get('cid')
    if cid:
        return get_specific_accounts_assets(cid)
    else:
        return _build_response(
            json.dumps(structure.get_all_accounts_assets(get_global_googleads_client()), indent=2))


def get_specific_accounts_assets(cid):
    """Returns all assets under the given cid."""
    # check input is valid
    if len(cid) < 10:
        return _build_response(
            'Invalid Customer Id', status=400, mimetype='text/plain')

    else:
        try:
            res = structure.get_accounts_assets(get_global_googleads_client(), cid)
            return _build_response(msg=json.dumps(res),status=200)
        except Exception as e:
            logging.exception('Failed getting assets for: ' + cid + ' ' + str(e))
            return _build_response(status=500)


@app.route('/structure/', methods=['GET'])
def get_structure():
    cid = int(request.args.get('cid'))
    try:
        setup.download_file_from_gcs('account_struct.json', account_struct_json_path)
        with open(account_struct_json_path, 'r') as f:
            accounts_struct = json.load(f)

        if cid:
            for account in accounts_struct:
                if account['id'] == cid:
                    return _build_response(msg=json.dumps(account, indent=2))

            return _build_response(msg='cid not found', status=500)

        else:
            return _build_response(msg=json.dumps(accounts_struct, indent=2))

    except:
        return _build_response(msg='could not get data', status=500)


@app.route('/assets-to-ag/', methods=['GET'])
def get_asset_to_ag():
    try:
        setup.download_file_from_gcs('asset_to_ag.json', asset_to_ag_json_path)
        with open(asset_to_ag_json_path, 'r') as f:
            asset_struct = json.load(f)

        if asset_struct:
            return _build_response(json.dumps(asset_struct))

        else:
            return _build_response(msg='asset structure is not available', status=501)

    except Exception as e:
        return _build_response(
            msg='error while reading asset_to_ag.json: ' + str(e), status=400)



@app.route('/mutate-ad/', methods=['POST'])
def mutate():
    """Assign or remove an asset from adgroups.

    gets a dict with two entries:
    1. refresh token to create clients
    2. list of asset, account, adgourp and action.
    preforms all of the actions one by one.

    returns a list with the new asset objects with the changed adgroups list.
    if its a text asset, returns a list with
    both 'headlines' and 'descriptions' entries.
    also changes the asset_to_ag.json file.
    """

    data = request.get_json(force=True)
    logging.info('Recived mutate request: %s', str(data['data']))
    refresh_token = data['refresh_token']
    data_load = data['data']

    asset_id = data_load[0]['asset']['id']
    asset_type = data_load[0]['asset']['type']

    aw_client = init_user_adwords_client(refresh_token)
    ga_client = init_user_googleads_client(refresh_token)

    setup.download_file_from_gcs('asset_to_ag.json', asset_to_ag_json_path)
    with open(asset_to_ag_json_path, 'r') as f:
        asset_struct = json.load(f)

    # special func for text assets, as they have 2 entries in asset_to_ag.json
    if asset_type == 'TEXT':
        return _text_asset_mutate(data_load, aw_client, ga_client, asset_id, asset_struct)

    asset_handler = {}
    index = 0 # to re-write back to location
    for entry in asset_struct:
        if entry['id'] == asset_id:
            asset_handler = entry
            break
        index += 1

    if not asset_handler:
        asset_handler = data_load[0]['asset']
        asset_handler['adgroups'] = []
        index = None

    failed_assign = []
    successeful_assign = []
    for item in data_load:
        account = item['account']
        adgroup = item['adgroup']
        action = item['action']
        asset = item['asset']

        try:
            mutation = mutate_ad(aw_client, account, adgroup, asset, action)
        except Exception as e:
            failed_assign.append(
                {
                    'adgroup': populate_adgroup_details(ga_client, account, adgroup),
                    'error_message': error_mapping(str(e)),
                    'err': str(e)
                }
            )
            mutation = 'failed'
            logging.error('could not execute mutation on adgroup: %s',str(adgroup))


        if mutation is None:
            successeful_assign.append(adgroup)
            asset_handler = _asset_ag_update(asset_handler,adgroup,action)

    Service_Class.reset_cid(aw_client)

    if index:
        asset_struct[index] = asset_handler
    else:
        asset_struct.append(asset_handler)

    with open(asset_to_ag_json_path, 'w') as f:
        json.dump(asset_struct, f,indent=2)
    setup.upload_file_to_gcs(asset_to_ag_json_path, 'asset_to_ag.json')
    if failed_assign and successeful_assign:
        status = 206
    elif successeful_assign:
        status = 200
    else:
        status = 500

    logging.info(
        'mutate response: msg={} , status={}'.format(asset_handler,index))

    return _build_response(msg=json.dumps(
        [{'asset':asset_handler,'index':index, 'failures':failed_assign}])
        , status=status)


def _text_asset_mutate(data, aw_client, ga_client, asset_id, asset_struct):
    """Handles text asset mutations"""

    asset_handlers = []
    index = 0 # to re-write back to location
    for entry in asset_struct:
        if entry['id'] == asset_id:
            asset_handlers.append({'asset':entry, 'index':index})
        index += 1


    # if only one of headlines/descriptions entries
    # exists in asset_struct, create the second one.
    # if the asset isn't assigned to any adgroup, create both entries
    # create headline entry only if text's len <= 30
    if len(asset_handlers) < 2:
        new_asset = {
            'id': data[0]['asset']['id'],
            'type':'TEXT',
            'asset_text':data[0]['asset']['asset_text'],
            'adgroups':[]
        }
        append = False
        if len(data[0]['asset']['asset_text']) <= 30:
            headline_len = True
        else:
            headline_len = False

        if len(asset_handlers) == 1:
            existing_type = asset_handlers[0]['asset']['text_type']
            if existing_type == 'headlines':
                new_asset['text_type'] = 'descriptions'
                append = True
            elif headline_len:
                new_asset['text_type'] = 'headlines'
                append = True
            if append:
                asset_handlers.append({'asset':new_asset, 'index':None})

        elif len(asset_handlers) == 0:
            new_asset['text_type'] = 'descriptions'
            asset_handlers.append({'asset':new_asset, 'index':None})
            if headline_len:
                new_asset_second = copy.copy(new_asset)
                new_asset_second['adgroups'] = []
                new_asset_second['text_type'] = 'headlines'
                asset_handlers.append({'asset':new_asset_second, 'index':None})

    successeful_assign = []
    failed_assign = []
    for item in data:
        account = item['account']
        adgroup = item['adgroup']
        action = item['action']
        asset = item['asset']
        text_type_to_assign = item['asset']['text_type_to_assign']

        try:
            mutation = mutate_ad(aw_client, account, adgroup, asset, action,
                                 text_type_to_assign)

        except Exception as e:
            failed_assign.append(
                {
                    'adgroup': populate_adgroup_details(ga_client, account, adgroup),
                    'error_message': error_mapping(str(e)),
                    'err': str(e)
                }
            )
            mutation = 'failed'
            logging.error(
                'could not execute mutation on adgroup: %s, %s' ,str(adgroup), str(e))

        if mutation is None:
            for obj in asset_handlers:
                if obj['asset']['text_type'] == text_type_to_assign:
                    obj['asset'] = _asset_ag_update(obj['asset'],adgroup,action)
                    successeful_assign.append(adgroup)

    Service_Class.reset_cid(aw_client)

    for obj in asset_handlers:
        if obj['index']:
            asset_struct[obj['index']] = obj['asset']
        else:
            asset_struct.append(obj['asset'])

    with open(asset_to_ag_json_path, 'w') as f:
        json.dump(asset_struct, f,indent=2)
    setup.upload_file_to_gcs(asset_to_ag_json_path, 'asset_to_ag.json')
    if failed_assign and successeful_assign:
        status = 206
    elif successeful_assign:
        status = 200
    else:
        status = 500

    logging.info(
        'mutate response: msg={} , status={}'.format(str(asset_handlers),index))

    return _build_response(
        msg=json.dumps(
            [{
                'asset': asset_handlers,
                'failures': failed_assign
            }]
        ),
        status=status)


def _asset_ag_update(asset,adgroup,action):
    """remove or add the adgroup to the asset entry"""

    if action == 'ADD':
        asset['adgroups'].append({
            'id': adgroup,
            'performance': 'NEEDS UPDATE',
            'performance_type': 'nontext'
        })

    if action == 'REMOVE':
        asset['adgroups'] = [
            item for item in asset['adgroups'] if item['id'] != adgroup]


    return asset


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload-files/', methods=['POST'])
def upload_files():
    status=200
    msg=''
    file = request.files['file']
    if file and file.filename:
        if allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filename.rsplit('.', 1)[1].lower()
            try:
                file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                file.save(file_path)
            except Exception as e:
                logging.error(str(e))
                status=500
        else:
            status=500
            msg='Image not in valid format'

    return _build_response(msg=msg, status=status)


@app.route('/validate-dimensions/', methods=['POST'])
def validate_dimensions():
    data = request.get_json(force=True)
    height = data['height']
    width = data['width']

    valid = (width, height) in ALLOWED_DIMENSIONS

    return _build_response(msg=json.dumps({"valid": valid}))


@app.route('/clean-dir/')
def clean_dir():
    status=200
    folder = UPLOAD_FOLDER
    for filename in os.listdir(folder):
        if filename == '.gitkeep':
            continue
        file_path = os.path.join(folder, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            logging.error('Failed to delete %s. Reason: %s' % (file_path, e))

    if len(os.listdir(folder)) > 1:
        status=500

    return _build_response(status=status)


@app.route('/upload-asset-bulk/', methods=['POST'])
def upload_bulk():
    """Bulk upload a list of YT videos to Google Ads. Gets a list of
    dicts, each represents a video to upload.
    Each dict should have the following fields:
    account - to which account to upload (should be the same for all entries)
    name - The name of the video, will be assigned as asset name
    url - a link to the video in YT

    will try to upload all entries one by one. If any will fail the return status
    will be 206 and will provide a list of all failed videos and the reason for
    the failure.
    If all will succeed will return a 200 status code.

    Currently only for YT videos. For images and HTML5 assets we
    will need to adress the part of moving the files into the
    'uploads' folder before uploading to Google Ads.
    """
    data = request.get_json(force=True)
    asset_list = data['data']
    refresh_token = data['refresh_token']

    ga_client = init_user_googleads_client(refresh_token)
    aw_client = init_user_adwords_client(refresh_token)
    failed = []
    success = []

    for asset in asset_list:
        try:
            res = upload(
                aw_client,
                ga_client,
                get_global_googleads_client(),
                asset['account'],
                asset_type='YOUTUBE_VIDEO',
                asset_name=asset['name'],
                url=asset['url']
            )
            success.append(res['asset'])
            logging.info('uploaded video named: %s with url: %s to account: %s',
                         asset['name'], asset['url'], asset['account'])
        except Exception as e:
            failed.append({'url':asset['url'],'name':asset['name'],'error':str(e)})
            logging.error('failed to upload video named: %s with url: %s to account: %s with error: %s',
                          asset['name'], asset['url'], asset['account'], str(e))
    #If non succeed return 400
    if (not success):
        return _build_response(msg=json.dumps(failed), status = 400)

    status = 200

    #If some uploads have failed return 206 status code
    if failed:
        status = 206

    #If all uploads succeeded return 200
    return _build_response(msg=json.dumps(success),status=status)


@app.route('/upload-asset/', methods=['POST'])
def upload_asset():
    """upload new asset to account and assign to specified adgroups.

    asset_type needs to be IMAGE,YOUTUBE_VIDEO,MEDIA_BUNDLE, descriptions,
    headlines
    """
    data = request.get_json(force=True)

    if data.get('account') is None or data.get('asset_type') is None or data.get('refresh_token') is None:
        return _build_response(msg='invalid arguments', status=400)

    refresh_token = data.get('refresh_token')
    logging.info(f"Using provided refresh token: {refresh_token}")

    ga_client = init_user_googleads_client(refresh_token)
    aw_client = init_user_adwords_client(refresh_token)

    # uniform file names
    asset_name = data.get('asset_name')
    if asset_name and data.get('asset_type') == 'IMAGE':
        asset_name = asset_name.replace(' ','_')
        for char in string.punctuation:
            if char not in ['_','-','.']:
                asset_name = asset_name.replace(char,'')

    try:
        result = upload(
            aw_client,
            ga_client,
            get_global_googleads_client(),
            data.get('account'),
            data.get('asset_type'),
            asset_name,
            asset_text=data.get('asset_text'),
            path= UPLOAD_FOLDER / asset_name,
            url=data.get('url'),
            adgroups=data.get('adgroups'))
    except Exception as e:
        logging.exception(e)
        Service_Class.reset_cid(aw_client)
        # Asset not uploaded
        return _build_response(msg=json.dumps(
            {'msg': 'Could not upload asset',
             'error_message': error_mapping(str(e)),
             'err': str(e)}),
            status=400)

    # No adgroup assignment was requested, asset uploaded successfully
    if result['status'] == -1:
        return _build_response(msg=json.dumps(
            {'msg':'Asset Uploaded','asset':result['asset']}), status=200)

    # successfully uploaded and assigend to all ad groups
    if result['status'] == 0:
        return _build_response(msg=json.dumps(result),status=200)

    # successfully assigend only to some ad groups
    if result['status'] == 1:
        return _build_response(msg=json.dumps(result),status=206)

    # text asset couldn't assign to any ad group - therefore also not uploaded
    if result['status'] == 3:
        return _build_response(msg=json.dumps(
            {'msg':'Text asset could not be assigned to any adgroup',
             'failures':result['unsuccessfull']}), status=500)

    # asset uploaded but didn't assign to any ad groups
    elif result['status'] == 2:
        return _build_response(msg=json.dumps(
            {'msg':'could not assign asset','asset':result['asset']}), status=500)


def _build_response(msg='', status=200, mimetype='application/json'):
    """Helper method to build the response."""
    response = app.response_class(msg, status=status, mimetype=mimetype)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


def init_clients():
    """Sets up googleads.yaml and google-ads.yaml and inits both clients.
    tries to create struct. if succesful, marks config_valid=1 in config.yaml
    to mark config is valid. Marks 0 otherwise."""

    status = 0

    try:
        get_global_adwords_client()
        get_global_googleads_client()
        with open(CONFIG_FILE_PATH, 'r') as f:
            config = yaml.load(f, Loader=yaml.FullLoader)
        config['config_valid'] = 1

        with open(CONFIG_FILE_PATH, 'w') as f:
            yaml.dump(config, f)
        setup.upload_file_to_gcs(CONFIG_FILE_PATH, CONFIG_FILE_PATH_GS)
    except Exception as e:
        logging.error(str(e))
        status=1

    return status


def _get_config_file_contents():
    """Gets the contents of the config file"""
    try:
        setup.download_file_from_gcs(CONFIG_FILE_PATH_GS, CONFIG_FILE_PATH)
        with open(CONFIG_FILE_PATH, 'r') as f:
            config = yaml.load(f, Loader=yaml.FullLoader)
        return config
    except Exception as e:
        logging.error(str(e))


def _make_api_config_dict(refresh_token: string) -> dict:
    """Creates a standard config structure for the GoogleAds and Adwords
    API's client instantiation by using the generic configuration file
    and adding the user's refresh token."""
    c = _get_config_file_contents()
    api_config = {
        'client_id': c['client_id'],
        'client_secret': c['client_secret'],
        'client_customer_id': c['client_customer_id'],
        'developer_token': c['developer_token'],
        'refresh_token': refresh_token
    }
    return api_config


def init_user_googleads_client(refresh_token: string) -> GoogleAdsClient:
    """Initiates a new user-based GoogleAds API client."""
    api_config = _make_api_config_dict(refresh_token)
    ga_client = GoogleAdsClient.load_from_dict(api_config)
    return ga_client


def init_user_adwords_client(refresh_token: string) -> adwords.AdWordsClient:
    """Initiates a new user-based GoogleAds API client."""
    api_config = _make_api_config_dict(refresh_token)
    config_dict = {
        'adwords': api_config
    }
    yaml_string = yaml.dump(config_dict)
    aw_client = adwords.AdWordsClient.LoadFromString(yaml_doc=yaml_string)
    return aw_client


def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()


@app.route('/shutdown', methods=['GET'])
def shutdown():
    shutdown_server()
    return 'Server shutting down...'

def open_browser():
    webbrowser.open_new(BASE_URL)


def get_server_config():
    try:
        with open('server.yaml', 'r') as f:
            config_file = yaml.load(f, Loader=yaml.FullLoader)
            host = config_file['hostname']
            port = config_file['port']
            cloud = config_file['cloud']
            return host, port, cloud
    except:
        raise RuntimeError('Cannot find server.yaml, or server.yaml is not correctly formatted.')


if __name__ == '__main__':
    host, port, cloud = get_server_config()
    if (not cloud):
        BASE_URL = f'http://{host}:{port}'
        threading.Timer(1, open_browser).start()
        app.run(host=host, port=port)
