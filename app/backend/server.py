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
from flask import Flask
from flask import request, jsonify, render_template
from googleads import adwords
from google.ads.google_ads.client import GoogleAdsClient
import setup
from mutate import mutate_ad
from structure import create_mcc_struct, get_accounts, get_struct
from get_all_assets import get_assets, get_accounts_assets
from upload_asset import upload
from service import Service_Class
from pathlib import Path
import copy
import logging

server = Flask(__name__, static_url_path="",
            static_folder="../asset_browser/frontend/dist/frontend",
            template_folder="../asset_browser/frontend/dist/frontend")


setup.set_api_configs()

CONFIG_PATH = Path('../config/')
LOGS_PATH = Path('../logs/server.log')

client = adwords.AdWordsClient.LoadFromStorage(CONFIG_PATH + 'googleads.yaml')
googleads_client = GoogleAdsClient.load_from_storage(CONFIG_PATH + 'google-ads.yaml')

asset_to_ag_json_path = Path('../cache/asset_to_ag.json')
account_struct_json_path = Path('../cache/account_struct.json')

create_mcc_struct(client)


logging.basicConfig(filename='server_logs.log',level=logging.INFO, format='%(asctime)s:%(levelname)s:%(message)s')

@server.route('/')
def upload_frontend():
  return render_template("index.html")
  # return 'Hello, World!'
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
    except:
      failed_assign.append(adgroup)
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
  return _build_response(msg=json.dumps([{'asset':asset_handler,'index':index}]), status=status)


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
    
    except:
      failed_assign.append(adgroup)
      mutation = 'failed'
      logging.error("could not execute mutation on adgroup: " + str(adgroup))
    
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
  return _build_response(msg=json.dumps(asset_handlers), status=status)


def _asset_ag_update(asset,adgroup,action):
  """remove or add the adgroup to the asset entry"""

  if action == "ADD":
    asset['adgroups'].append(adgroup)

  if action == "REMOVE":
    asset['adgroups'].remove(adgroup)

  return asset


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

