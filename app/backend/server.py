# Lint as: python3
""" server configuration for the assetMG tool"""
import json
from flask import Flask
from flask import request, jsonify
from flask_cors import CORS
from googleads import adwords
from google.ads.google_ads.client import GoogleAdsClient
import setup
from mutate import mutate_ad
from structure import create_mcc_struct, get_accounts, get_struct
from get_all_assets import get_assets, get_accounts_assets
from upload_asset import upload

server = Flask(__name__)
CORS(server)
server.config['CORS_HEADERS'] = 'Content-Type'

setup.set_api_configs()

CONFIG_PATH = '../config/'
client = adwords.AdWordsClient.LoadFromStorage(CONFIG_PATH + 'googleads.yaml')
googleads_client = GoogleAdsClient.load_from_storage(CONFIG_PATH + 'google-ads.yaml')

asset_to_ag_json_path = '../cache/asset_to_ag.json'
account_struct_json_path = '../cache/account_struct.json'

create_mcc_struct(client)

@server.route('/')
def upload_frontend():
  return 'Hello, World!'
  # use this route to upload front-end


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


# parse a list of actions
@server.route('/mutate-ad/', methods=['POST'])
def mutate():
  """Assign or remove an asset from an ad.

  gets a json file with a list of asset, account, adgourp and action.
  preforms all of them one by one.
  """
  successeful = []
  failed = []

  data = request.get_json(force=True)

  for item in data:
    account = item['account']
    adgroup = item['adgroup']
    action = item['action']
    asset = item['asset']
    if 'text_type_to_assign' in item:
      text_type_to_assign = item['text_type_to_assign']
    else:
      text_type_to_assign = 'descriptions'

    mutation = mutate_ad(client, account, adgroup, asset, action,
                       text_type_to_assign)

    if mutation:
      failed.append({'asset': asset, 'adgroup':adgroup, 'action': action})

    else:
      successeful.append({'asset': asset, 'adgroup':adgroup, 'action': action})

  if successeful and failed:
    result = {'successful': successeful, 'failed': failed}
    return _build_response(msg=result, status=206)

  if successeful:
    return _build_response(status=200)

  else:
    return _build_response(status=500)


@server.route('/upload-asset/', methods=['POST'])
def upload_asset():
  """upload new asset to account and assign to specified adgroups.

  asset_type needs to be IMAGE,YOUTUBE_VIDEO,MEDIA_BUNDLE, descriptions,
  headlines
  """
  data = request.get_json(force=True)

  if data.get('account') is None or data.get('asset_type') is None:
    return _build_response(msg='invalid arguments', status=400)

  result = upload(
      client,
      data.get('account'),
      data.get('asset_type'),
      data['asset_name'],
      asset_text=data.get('asset_text'),
      path=data.get('path'),
      url=data.get('url'),
      adgroups=data.get('adgroups'))

  if result['status'] == 3:
    return _build_response(msg='could not upload asset', status=500)

  if result['status'] == 0:
    return _build_response(
        msg='Asset successfully uploaded and assigned to %s' %
        (', '.join(map(str, result['successeful_assign']))),
        status=200)

  if result['status'] == 1:
    return _build_response(
        msg='Asset successfully uploaded and assigned to %s but could not '
        'assign to %s' % (', '.join(map(str, result['successeful'])), ', '.join(
            map(str, result['unsuccesseful_assign']))),
        status=206)

  else:
    return _build_response(msg='could not assign asset', status=500)


def _build_response(msg='', status=200, mimetype='application/json'):
  """Helper method to build the response."""
  response = server.response_class(msg, status=status, mimetype=mimetype)
  response.headers['Access-Control-Allow-Origin'] = '*'
  return response


server.run(debug=True)

