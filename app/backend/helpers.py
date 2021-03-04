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

from google.ads.google_ads.client import GoogleAdsClient


def populate_adgroup_details(client, account, ag_id):
  """Gets an adgroup ID and returns an adgroup object including
  adgroup id, adgroup name and campaign name."""

  ga_service = client.get_service('GoogleAdsService', version='v4')

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

  response = ga_service.search(account, query)

  for row in response:
    return {
      'adgroup_id': row.ad_group.id.value,
      'adgroup_name': row.ad_group.name.value,
      'campaign_name': row.campaign.name.value
    }