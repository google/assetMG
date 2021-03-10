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

"""setup module for the assetMG tool.

setting up both api config yaml files(googleads.yaml & google-ads.yaml)
with the paramaters given by the user in the config.yaml file
"""

import yaml
import json
import os
from pathlib import Path
import logging
from googleads import adwords
from google.cloud import storage


logging.basicConfig(level=logging.INFO, format='%(asctime)s:%(levelname)s:%(message)s')

try:
  with open('server.yaml', 'r') as f:
    config_file = yaml.load(f, Loader=yaml.FullLoader)
    host = config_file['hostname']
    port = config_file['port']
    CLOUD_VERSION = config_file['cloud']
    bucket_name = config_file['bucket_name']
  if (CLOUD_VERSION):
    logging.debug('This is a cloud version...')
    BASE_URL =  f'https://{host}'
    BUCKET_NAME = bucket_name
  else:
    BASE_URL =  f'http://{host}:{port}'
    BUCKET_NAME = ''
except:
  raise RuntimeError('Cannot find server.yaml, or server.yaml is not correctly formatted.')

if (CLOUD_VERSION):
  PREFIX = '/tmp/'
else:
  PREFIX = 'app/'
# if cloud


CONFIG_PATH = Path(PREFIX + 'config/')
CONFIG_PATH.mkdir(parents=True, exist_ok=True)
CONFIG_PATH_GS = ''
CONFIG_FILE_PATH = Path(PREFIX + 'config.yaml')
CONFIG_FILE_PATH_GS = 'config.yaml'
YT_CONFIG_FILE_PATH = Path(PREFIX + 'yt-config.json')
YT_CONFIG_FILE_PATH_GS = 'yt-config.json'
YT_CONFIG = str(YT_CONFIG_FILE_PATH)
YT_CONFIG_GS = str(YT_CONFIG_FILE_PATH_GS)

def set_api_configs():
  """set API configuration files."""
  download_file_from_gcs(CONFIG_FILE_PATH_GS, CONFIG_FILE_PATH)
  with open(CONFIG_FILE_PATH, 'r') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)
  print('setting API configs...')
  aw_config = {'adwords': config}
  with open(CONFIG_PATH / 'googleads.yaml', 'w') as f:
    yaml.dump(aw_config, f)
  upload_file_to_gcs(str(CONFIG_PATH) + '/googleads.yaml', 'googleads.yaml')
  config['login_customer_id'] = config['client_customer_id']
  with open(CONFIG_PATH / 'google-ads.yaml', 'w') as f:
    yaml.dump(config, f)
  upload_file_to_gcs(str(CONFIG_PATH) + '/google-ads.yaml', 'google-ads.yaml')

def get_refresh_token(code, flow):
  """Gets the refresh token using the access code from the user"""
  code = code.strip()
  failure = False
  refresh_token = None

  try:
    flow.fetch_token(code=code)
    refresh_token = flow.credentials.refresh_token
    logging.info(refresh_token)
  except Exception as e:
    logging.error(f'Authentication has failed: {e}')
    failure = True

  return failure, refresh_token


def set_refresh(code,flow):
  """Sets the refresh token in the config file, using code from
  the user"""
  failure = False

  refresh_token = code
  if failure:
    return failure, refresh_token
  try: 
  # Copy Google Storage file to tmp file 
    download_file_from_gcs(CONFIG_FILE_PATH_GS, CONFIG_FILE_PATH)
    with open(CONFIG_FILE_PATH, 'r') as f:
      credentials = yaml.safe_load(f)
      print(credentials)
      credentials['refresh_token'] = refresh_token 
    with open(CONFIG_FILE_PATH, 'w') as f:
      yaml.dump(credentials, f, default_flow_style=False)
    upload_file_to_gcs(CONFIG_FILE_PATH, CONFIG_FILE_PATH_GS)
  except Exception as e:
    logging.error(str(e))
    failure = True

  return failure , refresh_token
  
def download_file_from_gcs(gs_path, local_path):
  """download a file from Google Cloud Storage to local file, if this is a cloud deployment"""
  if (CLOUD_VERSION):
    client = storage.Client()
    bucket = client.get_bucket(BUCKET_NAME)
    blob = bucket.blob(gs_path)
    blob.download_to_filename(str(local_path))

def upload_file_to_gcs(local_path, gs_path):
  """upload a local file to Google Cloud Storage path, if this is a cloud deployment"""
  if (CLOUD_VERSION):
    with open(local_path, 'r') as f:
      client = storage.Client()
      bucket = client.get_bucket(BUCKET_NAME)
      blob2 = bucket.blob(gs_path)
      blob2.upload_from_file(f)

def set_yt_config():
  """set the YT api config file"""
  download_file_from_gcs(YT_CONFIG_GS, YT_CONFIG)
  with open(CONFIG_PATH / "yt_config.json", encoding="utf-8") as f:
    yt = json.load(f)

  download_file_from_gcs(CONFIG_FILE_PATH_GS, CONFIG_FILE_PATH)
  with open(CONFIG_FILE_PATH, 'r') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)

  yt['web']['client_secret'] = config['client_secret']
  yt['web']['client_id'] = config['client_id']

  with open(CONFIG_PATH / "yt_config.json", 'w') as f:
      json.dump(yt, f, indent=2)
  upload_file_to_gcs(YT_CONFIG, YT_CONFIG_GS)