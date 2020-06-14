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

"""This module is a part of the UAC AssetMG tool, incharge of mutating assets.

This module gets a specific ad info (account id, adgroup id), an asset, and an
action (REMOVE, ADD).
This module ads or removes an asset from this ad
"""

from googleads import adwords
from service import Service_Class


PAGE_SIZE = 500
actions = ['ADD', 'REMOVE']


def mutate_ad(client,
              account,
              adgroup,
              asset,
              action,
              text_type_to_assign='descriptions'):
  """Add or remove asset to a given adgroup's ad."""
  if action not in actions:
    raise ValueError('action not supported')

  client.SetClientCustomerId(account)

  asset_type_map = {
      'TEXT': 'TextAsset',
      'IMAGE': 'ImageAsset',
      'YOUTUBE_VIDEO': 'YouTubeVideoAsset',
      'MEDIA_BUNDLE': 'MediaBundleAsset'
  }
  property_map = {
      'TEXT': text_type_to_assign,
      'IMAGE': 'images',
      'YOUTUBE_VIDEO': 'videos',
      'MEDIA_BUNDLE': 'html5MediaBundles'
  }

  asset_type = asset_type_map[asset['type']]
  ad_property = property_map[asset['type']]

  # ad id is required to add/remove assets from the adgroup
  ad_id = _get_ad_id(client, adgroup)

  selector = {
      'fields': [
          'Id',
          'UniversalAppAdDescriptions',
          'UniversalAppAdHeadlines',
          'UniversalAppAdImages',
          'UniversalAppAdYouTubeVideos',
          'UniversalAppAdHtml5MediaBundles',
      ],
      'predicates': [{
          'field': 'Id',
          'operator': 'EQUALS',
          'values': [ad_id],
      }],
  }

  ad_service = Service_Class.get_ad_service(client)

  ad = ad_service.get(selector)['entries'][0]

  # Case 1: adding an asset to the ad
  if action == 'ADD':
    attached_asset = [{
        'asset': {
            'xsi_type': asset_type,
            'assetId': asset['id'],
        }
    }]

    # YT video assets require the video ID to assign to ad
    if asset_type == 'YouTubeVideoAsset':
      attached_asset[0]['asset']['youTubeVideoId'] = asset['video_id']

    # Text assets require the text itself to assign to ad
    if asset_type == 'TextAsset':
      attached_asset[0]['asset']['assetText'] = asset['asset_text']

    ad[ad_property] += attached_asset

  # Case 2: Removing an asset from the ad
  elif action == 'REMOVE':
    for item in ad[ad_property]:
      if item['asset']['assetId'] == asset['id']:
        ad[ad_property].remove(item)

  operations = [{
      'operator': 'SET',
      'operand': ad,
  }]

  ad_service.mutate(operations)
  Service_Class.reset_cid(client)


def _get_ad_id(client, adgroup):
  """gets the ad id from the adgroup id."""
  adgroupad_service = Service_Class.get_ad_group_ad_service(client)
  selector = {
      'fields': ['Id'],
      'predicates': [{
          'field': 'AdGroupId',
          'operator': 'EQUALS',
          'values': [adgroup]
      }],
  }
  
  page = adgroupad_service.get(selector)
  return page['entries'][0]['ad']['id']


