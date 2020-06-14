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

"""Gets all assets, by account. this module is part of the assetMG tool.

Use this module to get all the assets for each non-mcc account.
This module will run faster than the structure module, and is to be used for
displaying all the assets divided by accounts in the first web-page of the tool.
use 'get_assets' to get a mapping of all the accounts-to-assets under the mcc in
the config file. Use the 'get_accounts_assets' to get all the assets from a
specific account.
This module takes no-argumens.
"""

import sys
from googleads import adwords
import structure
from google.ads.google_ads.client import GoogleAdsClient
from google.ads.google_ads.errors import GoogleAdsException

_DEFAULT_PAGE_SIZE = 1000


def get_accounts_assets(client, customer_id):
  """Gets all assets under the given customer id.

  Args:
    client: google ads api client object
    customer_id: (string) account id
  Returns:
    dict
  """
  ga_service = client.get_service('GoogleAdsService', version='v2')
  # this call is made for each function run, but it will allow it to be global and used seperatly
  asset_types = sorted(
      client.get_type('AssetTypeEnum').AssetType.items(), key=lambda x: x[1])

  query = (
      'SELECT asset.name, asset.id, asset.image_asset.file_size, '
      'asset.image_asset.full_size.url, '
      'asset.text_asset.text, '
      'asset.image_asset.full_size.height_pixels, '
      'asset.image_asset.full_size.width_pixels, '
      'asset.youtube_video_asset.youtube_video_id, '
      'asset.type FROM asset ')

  results = ga_service.search(
      customer_id, query=query, page_size=_DEFAULT_PAGE_SIZE)

  assets = []
  asset = {}
  yt_url_prefix = 'https://www.youtube.com/watch?v='
  yt_thumbnail_url = 'https://img.youtube.com/vi/%s/1.jpg'

  try:
    count = 0
    for row in results:
      asset['id'] = row.asset.id.value
      asset['name'] = row.asset.name.value
      asset['type'] = asset_types[row.asset.type][0]
      if asset['type'] == 'TEXT':
        asset['asset_text'] = row.asset.text_asset.text.value
      if asset['type'] == 'IMAGE':
        asset['image_url'] = row.asset.image_asset.full_size.url.value
        asset['file_size'] = row.asset.image_asset.file_size.value
        asset['image_height'] = row.asset.image_asset.full_size.height_pixels.value
        asset['image_width'] = row.asset.image_asset.full_size.width_pixels.value
      if asset['type'] == 'YOUTUBE_VIDEO':
        asset['video_id'] = row.asset.youtube_video_asset.youtube_video_id.value
        asset['link'] = yt_url_prefix + asset['video_id']
        asset['image_url'] = yt_thumbnail_url%(asset['video_id'])

      assets.append(asset)
      asset = {}
      count += 1

    return 0, assets

  except GoogleAdsException as ex:
    return 1, str(ex)


def get_assets(googleads_client, adwords_client):
  """gets all the non-mcc accounts under the clients cid, and for each returns all assets."""
  accounts = structure.get_accounts(adwords_client)

  for account in accounts:
    account['assets'] = get_accounts_assets(googleads_client,
                                            str(account['id']))

  return accounts


if __name__ == '__main__':
  google_ads_client = GoogleAdsClient.load_from_storage()
  aw_client = adwords.AdWordsClient.LoadFromStorage()

  get_assets(google_ads_client, aw_client)
