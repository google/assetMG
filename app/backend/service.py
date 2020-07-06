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

import yaml

VERSION = 'v201809'

class Service_Class:

  @staticmethod
  def get_ad_service(client):
    return client.GetService('AdService', version=VERSION)

  @staticmethod
  def get_campaign_service(client):
    return client.GetService('CampaignService', version=VERSION)

  @staticmethod
  def get_managed_customer_service(client):
    return client.GetService('ManagedCustomerService', version=VERSION)

  @staticmethod
  def get_ad_group_service(client):
    return client.GetService('AdGroupService', version=VERSION)

  @staticmethod
  def get_ad_group_ad_service(client):
    return client.GetService('AdGroupAdService', version=VERSION)

  @staticmethod
  def get_asset_service(client):
    return client.GetService('AssetService', version=VERSION)

  @staticmethod
  def reset_cid(client):
    with open('app/config/googleads.yaml', 'r') as f:
      config = yaml.load(f, Loader=yaml.FullLoader)
    
    cid = config['adwords']['client_customer_id']
    client.SetClientCustomerId(cid)
