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

"""Helper functions to be used by the backend."""

from google.ads.googleads.client import GoogleAdsClient
from app.backend.service import GoogleAds_Service

class Helper(object):

  def __init__(self, client, customer_id):
    self._service = GoogleAds_Service.get_service(client, 'GoogleAdsService')
    self._client = client
    self._customer_id = customer_id

  def get_rows(self, query):
    search_request = GoogleAds_Service.get_type(self._client, 'SearchGoogleAdsStreamRequest')
    search_request.customer_id = self._customer_id
    search_request.query = query
    response = self._service.search_stream(request=search_request)
    return response

def populate_adgroup_details(client, customer_id, ag_id):
  """Gets an adgroup ID and returns an adgroup object including
  adgroup id, adgroup name and campaign name."""

  helper = Helper(client, customer_id)
  query = '''
        SELECT
          campaign.name,
          ad_group.name,
          ad_group.id
        FROM
          ad_group
        WHERE
          ad_group.id = %s 
  ''' % (ag_id)

  response = helper.get_rows(query)

  for batch in response:
    for row in batch.results:
      return {
        'adgroup_id': row.ad_group.id,
        'adgroup_name': row.ad_group.name,
        'campaign_name': row.campaign.name
      }


def get_image_url(client,customer_id, asset_id):
  
  helper = Helper(client, customer_id)
  query = f'''
        SELECT
          asset.image_asset.full_size.url
        FROM
          asset
        WHERE
          asset.id = {asset_id}
  '''
  response = helper.get_rows(query)

  for batch in response:
    for row in batch.results:
      return row.asset.image_asset.full_size.url
