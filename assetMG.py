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
from app.backend.structure import create_mcc_struct, get_accounts
from app.backend.get_all_assets import get_assets, get_accounts_assets
from app.backend.upload_asset import upload
from app.backend.service import Service_Class
from app.backend.yt_upload import initialize_upload
from app.backend.error_handling import error_mapping
from googleapiclient.discovery import build
from pathlib import Path
import copy
import logging
import yaml
from google_auth_oauthlib.flow import InstalledAppFlow
import webbrowser
import threading
import sys
import os
import shutil
from werkzeug.utils import secure_filename
import webview
import string


server = Flask(__name__, static_url_path="",
            static_folder="app/asset_browser/frontend/dist/frontend",
            template_folder="app/asset_browser/frontend/dist/frontend")


UPLOAD_FOLDER = Path('app/uploads')
ALLOWED_EXTENSIONS = {'txt','png', 'jpg', 'jpeg', 'zip','gif'}

server.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

CONFIG_PATH = Path('app/config/')
CONFIG_FILE_PATH = Path('config.yaml')
YT_CONFIG_FILE_PATH = Path('app/config/yt_config.json')
LOGS_PATH = Path('app/logs/server.log')
YT_CLIENT_SCOPES = ['https://www.googleapis.com/auth/youtube.upload']

asset_to_ag_json_path = Path('app/cache/asset_to_ag.json')
account_struct_json_path = Path('app/cache/account_struct.json')

logging.basicConfig(filename=LOGS_PATH ,level=logging.INFO, format='%(asctime)s:%(levelname)s:%(message)s')

client=''
googleads_client=''


# check if config is valid. if yes, init clients and create struct
with open(CONFIG_FILE_PATH, 'r') as f:
  config_file = yaml.load(f, Loader=yaml.FullLoader)

if config_file['config_valid']:
  setup.set_api_configs()
  client = adwords.AdWordsClient.LoadFromStorage(CONFIG_PATH / 'googleads.yaml')
  googleads_client = GoogleAdsClient.load_from_storage(CONFIG_PATH / 'google-ads.yaml')
  try:
    create_mcc_struct(client)
  except Exception as e:
    logging.exception("error when trying to create struct")
    Service_Class.reset_cid(client)


@server.route('/')
def upload_frontend():
  return render_template("index.html")


@server.route('/config/', methods=['GET'])
def get_configs():
  """return all config parameters"""
  with open(CONFIG_FILE_PATH, 'r') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)

  return _build_response(json.dumps(config))


@server.route('/set-configs/', methods=['POST'])
def set_secret():
  """gets client id, client secret, dev token, account id.
  Saves to config.yaml and returns refresh url"""
  global flow
  data = request.get_json(force=True)

  # determines if its a reset to previous valid config or trying to setup new config
  is_reset = True

  if not data.get('config_valid'):
    data['refresh_token'] = None
    data['config_valid'] = 0
    is_reset = False

  with open(CONFIG_FILE_PATH, 'w') as f:
    yaml.dump(data, f)

  # If its just a reset - no need to generate a url
  if is_reset:
    return _build_response(msg=json.dumps('successfully restored previous configs'), status=200)

  try:
    client_config = {
        'installed': {
            'client_id': data['client_id'],
            'client_secret': data['client_secret'],
            'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
            'token_uri': 'https://accounts.google.com/o/oauth2/token',
        }
    }
    flow = InstalledAppFlow.from_client_config(
        client_config, scopes=['https://www.googleapis.com/auth/adwords'])
    flow.redirect_uri = 'urn:ietf:wg:oauth:2.0:oob'
    auth_url, _ = flow.authorization_url()
    status=200

  except Exception as e:
    logging.error(str(e))
    status=500
    auth_url = ''

  return _build_response(msg=json.dumps(auth_url), status=status)


@server.route('/set-refresh/', methods=['POST'])
def set_refresh_token():
  """Can only be called if set-configs was called before.
  Gets the refresh token and saves it to config.yaml
  If succesfull calls init_client()"""
  data = request.get_json(force=True)
  code = data['code']
  set_status, refresh_token = setup.set_refresh(code,flow)
  if set_status:
    # meaning that set_refresh failed
    return _build_response(msg=json.dumps("could not update refresh token"), status=500)

  init_status = init_clients()

  if init_status:
    return _build_response(msg=json.dumps("config invalid"), status=500)
  else:
    return _build_response(msg=json.dumps(refresh_token),status=200)


@server.route('/init-yt/', methods=['GET'])
def init_yt():
  """opens a browser with the login window. """
  setup.set_yt_config()
  yt_flow = InstalledAppFlow.from_client_secrets_file(YT_CONFIG_FILE_PATH , YT_CLIENT_SCOPES)
  credentials = yt_flow.run_local_server(host='localhost',
    port=8080,
    authorization_prompt_message='Please visit this URL: {url}',
    success_message='The auth flow is complete; you may close this window.',
    open_browser=True)
  global yt_client
  yt_client = build('youtube', 'v3', credentials = credentials)
  return _build_response(status=200)


@server.route('/upload-to-yt/', methods=['POST'])
def upload_to_yt():
  """Call this route to upload a video to YT.
  Send a JSON with the following params:

  file - str, path to the file to upload
  title - str,
  description - str, video description
  category - str representing a number. https://developers.google.com/youtube/v3/docs/videoCategories/list',
  keywords - list,
  privacyStatus - str, private/public/unlisted

  Returns:
  dict - {"vid_id" : id}
  """
  data = request.get_json(force=True)
  if data.get('file') is None:
    return _build_response(msg=json.loads("File not specified", status=404))
  try:
    id = initialize_upload(yt_client,**{k: v for k, v in data.items() if v is not None})
    status=200
    msg = {"vid_id" : id}
  except Exception as e:
    msg = str(e)
    logging.error(str(e))
    status=500

  return _build_response(msg = json.dumps(msg), status=status)


@server.route('/create-struct/', methods=['GET'])
def create_struct():
  try:
    create_mcc_struct(client)
    status=200
  except Exception as e:
    status=500
    logging.error(str(e))

  return _build_response(status=status)


@server.route('/accounts/', methods=['GET'])
def get_all_accounts():
  """gets all accounts under the configured MCC. name and id"""
  try:
    accounts = get_accounts(client)
    return _build_response(msg=json.dumps(accounts), status=200)
  except:
    return _build_response(msg="Couldn't get accoutns", status=500)



@server.route('/accounts-assets/', methods=['GET'])
def get_all_accounts_assets():
  """if cid is specified, gets all its assets. if not - gets all accounts and their assets."""
  cid = request.args.get('cid')
  if cid:
    return get_specific_accounts_assets(cid)
  else:
    return _build_response(json.dumps(get_assets(googleads_client, client), indent=2))


def get_specific_accounts_assets(cid):
  """Returns all assets under the given cid."""
  # check input is valid
  if len(cid) < 10:
    return _build_response(
        'Invalid Customer Id', status=400, mimetype='text/plain')

  else:
    res = get_accounts_assets(googleads_client, cid)
    execution = res[0]
    res_data = json.dumps(res[1])
    # check function execution
    if execution:
      return _build_response(status=404)
    else:
      return _build_response(msg=res_data)


@server.route('/structure/', methods=['GET'])
def get_structure():
  cid = int(request.args.get('cid'))
  try:
    with open(account_struct_json_path, 'r') as f:
      accounts_struct = json.load(f)

    if cid:
      for account in accounts_struct:
        if account['id'] == cid:
          return _build_response(msg=json.dumps(account, indent=2))

      return _build_response(msg="cid not found", status=500)

    else:
      return _build_response(msg=json.dumps(accounts_struct, indent=2))

  except:
    return _build_response(msg="could not get data", status=500)


@server.route('/assets-to-ag/', methods=['GET'])
def get_asset_to_ag():
  try:
    with open(asset_to_ag_json_path, 'r') as f:
      asset_struct = json.load(f)

    if asset_struct:
      return _build_response(json.dumps(asset_struct))

    else:
      return _build_response(msg='asset structure is not available', status=501)

  except Exception as e:
    return _build_response(
        msg='error while reading asset_to_ag.json: ' + str(e), status=400)



@server.route('/mutate-ad/', methods=['POST'])
def mutate():
  """Assign or remove an asset from adgroups.

  gets a json file with a list of asset, account, adgourp and action.
  preforms all of the actions one by one.

  returns a list withthe new asset objects with the changed adgroups list.
  if its a text asset, returns a list with both 'headlines' and 'descriptions' entries.
  also changes the asset_to_ag.json file.
  """

  data = request.get_json(force=True)
  logging.info("Recived mutate request: " + str(data))
  asset_id = data[0]['asset']['id']
  asset_type = data[0]['asset']['type']

  with open(asset_to_ag_json_path, 'r') as f:
    asset_struct = json.load(f)

  # special func for text assets, as they have 2 entries in asset_to_ag.json
  if asset_type == 'TEXT':
    return _text_asset_mutate(data, asset_id, asset_struct)

  asset_handler = {}
  index = 0 # to re-write back to location
  for entry in asset_struct:
    if entry['id'] == asset_id:
      asset_handler = entry
      break
    index += 1

  if not asset_handler:
    asset_handler = data[0]['asset']
    asset_handler['adgroups'] = []
    index = None

  failed_assign = []
  successeful_assign = []
  for item in data:
    account = item['account']
    adgroup = item['adgroup']
    action = item['action']
    asset = item['asset']

    try:
      mutation = mutate_ad(client, account, adgroup, asset, action)
    except Exception as e:
      failed_assign.append({'adgroup':adgroup,'error_massage':error_mapping(str(e)),'err':str(e)})
      mutation = 'failed'
      logging.error("could not execute mutation on adgroup: " + str(adgroup))


    if mutation is None:
      successeful_assign.append(adgroup)
      asset_handler = _asset_ag_update(asset_handler,adgroup,action)

  Service_Class.reset_cid(client)

  if index:
    asset_struct[index] = asset_handler
  else:
    asset_struct.append(asset_handler)

  with open(asset_to_ag_json_path, 'w') as f:
    json.dump(asset_struct, f,indent=2)

  if failed_assign and successeful_assign:
    status = 206
  elif successeful_assign:
    status = 200
  else:
    status = 500

  logging.info("mutate response: msg={} , status={}".format(asset_handler,index))
  return _build_response(msg=json.dumps([{'asset':asset_handler,'index':index, 'failures':failed_assign}]), status=status)


def _text_asset_mutate(data, asset_id, asset_struct):
  """Handles text asset mutations"""

  asset_handlers = []
  index = 0 # to re-write back to location
  for entry in asset_struct:
    if entry['id'] == asset_id:
      asset_handlers.append({'asset':entry, 'index':index})
    index += 1


  # if only one of headlines/descriptions entries exists in asset_struct, create the second one
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
      mutation = mutate_ad(client, account, adgroup, asset, action,
                       text_type_to_assign)

    except Exception as e:
      failed_assign.append({'adgroup':adgroup,'error_massage':error_mapping(str(e)),'err':str(e)})
      mutation = 'failed'
      logging.error("could not execute mutation on adgroup: " + str(adgroup) + str(e))

    if mutation is None:
      for obj in asset_handlers:
        if obj['asset']['text_type'] == text_type_to_assign:
          obj['asset'] = _asset_ag_update(obj['asset'],adgroup,action)
          successeful_assign.append(adgroup)

  Service_Class.reset_cid(client)

  for obj in asset_handlers:
    if obj['index']:
      asset_struct[obj['index']] = obj['asset']
    else:
      asset_struct.append(obj['asset'])

  with open(asset_to_ag_json_path, 'w') as f:
    json.dump(asset_struct, f,indent=2)

  if failed_assign and successeful_assign:
    status = 206
  elif successeful_assign:
    status = 200
  else:
    status = 500

  logging.info("mutate response: msg={} , status={}".format(str(asset_handlers),index))
  # switch to this return and tell Mariam the changed return type.
  # return _build_response(msg=json.dumps({'assets':asset_handlers, 'failures':failed_assign}))
  return _build_response(msg=json.dumps(asset_handlers), status=status)


def _asset_ag_update(asset,adgroup,action):
  """remove or add the adgroup to the asset entry"""

  if action == "ADD":
    asset['adgroups'].append(adgroup)

  if action == "REMOVE":
    asset['adgroups'].remove(adgroup)

  return asset


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@server.route('/upload-files/', methods=['POST'])
def upload_files():
  status=200
  file = request.files['file']
  if file and allowed_file(file.filename):
    filename = secure_filename(file.filename)
    try:
      file.save(os.path.join(server.config['UPLOAD_FOLDER'], filename))
    except Exception as e:
      logging.error(str(e))
      status=500
  return _build_response(status=status)


@server.route('/clean-dir/')
def clean_dir():
  status=200
  folder = UPLOAD_FOLDER
  for filename in os.listdir(folder):
      file_path = os.path.join(folder, filename)
      try:
          if os.path.isfile(file_path) or os.path.islink(file_path):
              os.unlink(file_path)
          elif os.path.isdir(file_path):
              shutil.rmtree(file_path)
      except Exception as e:
          logging.error('Failed to delete %s. Reason: %s' % (file_path, e))

  if len(os.listdir(folder)) != 0:
    status=500

  return _build_response(status=status)



@server.route('/upload-asset/', methods=['POST'])
def upload_asset():
  """upload new asset to account and assign to specified adgroups.

  asset_type needs to be IMAGE,YOUTUBE_VIDEO,MEDIA_BUNDLE, descriptions,
  headlines
  """
  data = request.get_json(force=True)

  if data.get('account') is None or data.get('asset_type') is None:
    return _build_response(msg='invalid arguments', status=400)

  # uniform file names
  asset_name = data.get('asset_name')
  if asset_name and data.get('asset_type') == 'IMAGE':
    asset_name = asset_name.replace(' ','_')
    for char in string.punctuation:
      if char not in ['_','-','.']:
        asset_name = asset_name.replace(char,'')

  try:
    result = upload(
        client,
        data.get('account'),
        data.get('asset_type'),
        asset_name,
        asset_text=data.get('asset_text'),
        path= UPLOAD_FOLDER / asset_name,
        url=data.get('url'),
        adgroups=data.get('adgroups'))


  except Exception as e:
    logging.error(str(e))
    Service_Class.reset_cid(client)
    # Asset not uploaded
    return _build_response(msg=json.dumps({'msg': 'Could not upload asset', 'error_massage': error_mapping(str(e)), 'err': str(e)}), status=400)

  Service_Class.reset_cid(client)
  
  # No adgroup assignment was requested, asset uploaded successfully
  if result['status'] == -1:
    return _build_response(msg=json.dumps({'msg':'Asset Uploaded','asset':result['asset']}), status=200)

  # successfully uploaded and assigend to all ad groups
  if result['status'] == 0:
    return _build_response(msg=json.dumps(result),status=200)

  # successfully assigend only to some ad groups
  if result['status'] == 1:
    return _build_response(msg=json.dumps(result),status=206)

  # text asset couldn't assign to any ad group - therefore also not uploaded
  if result['status'] == 3:
    return _build_response(msg=json.dumps({'msg':'Text asset could not be assigned to any adgroup','failures':result['unsuccessfull']}))

  # asset uploaded but didn't assign to any ad groups
  elif result['status'] == 2:
    return _build_response(msg=json.dumps({'msg':'could not assign asset','asset':result['asset']}), status=500)




def _build_response(msg='', status=200, mimetype='application/json'):
  """Helper method to build the response."""
  response = server.response_class(msg, status=status, mimetype=mimetype)
  response.headers['Access-Control-Allow-Origin'] = '*'
  return response


def init_clients():
  """Sets up googleads.yaml and google-ads.yaml and inits both clients.
  tries to create struct. if succesful, marks config_valid=1 in config.yaml
  to mark config is valid. Marks 0 otherwise."""

  setup.set_api_configs()

  status = 0

  global client
  global googleads_client

  try:

    client = adwords.AdWordsClient.LoadFromStorage(CONFIG_PATH / 'googleads.yaml')
    googleads_client = GoogleAdsClient.load_from_storage(CONFIG_PATH / 'google-ads.yaml')

    with open(CONFIG_FILE_PATH, 'r') as f:
      config = yaml.load(f, Loader=yaml.FullLoader)

    config['config_valid'] = 1

    with open(CONFIG_FILE_PATH, 'w') as f:
      yaml.dump(config, f)

  except Exception as e:
    logging.error(str(e))
    status=1

  return status


def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()


@server.route('/shutdown', methods=['GET'])
def shutdown():
  shutdown_server()
  return 'Server shutting down...'


def open_browser():
  webbrowser.open_new('http://127.0.0.1:5000/')


def start_server():
  server.run()

if __name__ == '__main__':
  threading.Timer(1, open_browser).start()
  server.run()



