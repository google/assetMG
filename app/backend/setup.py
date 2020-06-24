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
import os
from pathlib import Path
import logging
from google_auth_oauthlib.flow import InstalledAppFlow
from googleads import adwords

LOGS_PATH = Path('../logs/server.log')
logging.basicConfig(filename=LOGS_PATH ,level=logging.INFO, format='%(asctime)s:%(levelname)s:%(message)s')

CONFIG_PATH = Path('../config/')
CONFIG_FILE_PATH = Path('../../config.yaml')


def set_api_configs():
  """set API configuration files."""

  with open(CONFIG_FILE_PATH, 'r') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)

  aw_config = {'adwords': config}
  with open(CONFIG_PATH / 'googleads.yaml', 'w') as f:
    yaml.dump(aw_config, f)

  config['login_customer_id'] = config['client_customer_id']
  with open(CONFIG_PATH / 'google-ads.yaml', 'w') as f:
    yaml.dump(config, f)


def set_refresh(code,flow):
  """Gets the refresh token, using code from the user"""
  code = code.strip()
  finish_status = 0

  try:
    flow.fetch_token(code=code)
  except Exception as ex:
    logging.error('Authentication has failed: %s' % ex)
    finish_status = 1

  try:  
    with open(CONFIG_FILE_PATH, 'r') as f:
      credentials = yaml.safe_load(f)

    refresh_token = flow.credentials.refresh_token
    credentials['refresh_token'] = refresh_token
    with open(CONFIG_FILE_PATH, 'w') as f:
      yaml.dump(credentials, f, default_flow_style=False)

  except Exception as e:
    logging.error(str(e))
    finish_status = 1
    
  return finish_status , refresh_token

