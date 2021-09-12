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

"""Module for fetching account structure using Google Ads reporting API."""

import json
import logging
import time
from concurrent import futures
from google.ads.googleads.client import GoogleAdsClient
import app.backend.setup as setup

logging.basicConfig(level=logging.DEBUG,
                    format='[%(asctime)s - %(levelname)s] %(message).5000s')
logging.getLogger('google.ads.google_ads.client').setLevel(logging.INFO)

_MAX_RETRIES = 3

class RowsIterator(object):
    """Streamed report results iterator."""

    def __init__(self, response):
        self._response = response
        self._results = None

    def _next_batch(self):
        self._batch = next(self._response)
        self._results = iter(self._batch.results)

    def __iter__(self):
        return self

    def __next__(self):
        if self._results is None:
            self._next_batch()
        try:
            return next(self._results)
        except StopIteration:
            self._next_batch()
            return next(self._results)


class StructureBuilder(object):
    """Abstract structure builder class."""

    _CAMPAIGN_FILTER = '''
      campaign.advertising_channel_sub_type IN(
        'APP_CAMPAIGN',
        'APP_CAMPAIGN_FOR_ENGAGEMENT',
        'SEARCH_MOBILE_APP',
        'DISPLAY_MOBILE_APP'
      )
      AND
        campaign.status NOT IN('REMOVED')
  '''
    _AD_GROUP_FILTER = 'ad_group.status NOT IN ("REMOVED")'


    def __init__(self, client, customer_id):
        self._service = client.get_service('GoogleAdsService', version='v7')
        self._client = client
        self._customer_id = customer_id
        self._enums = {
            'type': client.get_type('AssetTypeEnum').AssetType,
            'field_type': client.get_type('AssetFieldTypeEnum').AssetFieldType,
            'adgroup_status': client.get_type('AdGroupStatusEnum').AdGroupStatus,
            'campaign_status': client.get_type('CampaignStatusEnum').CampaignStatus,
            'performance_label': client.get_type(
                'AssetPerformanceLabelEnum').AssetPerformanceLabel
        }


    def _get_rows(self, query):
        search_request = self._client.get_type("SearchGoogleAdsStreamRequest")
        search_request.customer_id = self._customer_id
        search_request.query = query
        response = self._service.search_stream(request=search_request)
        return RowsIterator(response)


    def _build_asset(self, row):
        asset_type = self._enums['type'](row.asset.type_).name
        perf_label = self._enums['performance_label'](row.ad_group_ad_asset_view.performance_label).name
        asset = {
            'id': row.asset.id,
            'name': row.asset.name,
            'type': asset_type,
            'stats': {
                'clicks': row.metrics.clicks,
                'all_conversions': row.metrics.all_conversions,
                'impressions': row.metrics.impressions,
                'cost': row.metrics.cost_micros / 1000000
            },
            'performance': perf_label
        }
        if asset_type == 'IMAGE':
            asset['image_url'] = row.asset.image_asset.full_size.url
            asset['file_size'] = row.asset.image_asset.file_size
            asset['image_height'] = \
                row.asset.image_asset.full_size.height_pixels
            asset['image_width'] = row.asset.image_asset.full_size.width_pixels
        elif asset_type == 'TEXT':
            text_type = self._enums['field_type'](
                row.ad_group_ad_asset_view.field_type).name
            asset['text_type'] = text_type.lower() + 's'
            asset['asset_text'] = row.asset.text_asset.text
        elif asset_type == 'YOUTUBE_VIDEO':
            video_id = row.asset.youtube_video_asset.youtube_video_id
            asset['video_id'] = video_id
            asset['link'] = f'https://www.youtube.com/watch?v={video_id}'
            asset['image_url'] = f'https://img.youtube.com/vi/{video_id}/1.jpg'
        return asset

    def _build_yt_data(self,row):
        yt_data  = {
            'yt_id': row.video.id,
            'yt_title': row.video.title
        }
        return yt_data

    def build(self):
        return None


class AdGroupAssetsStructureBuilder(StructureBuilder):
    """Ad group assets structure builder class."""

    def build(self, ad_group_id):
        rows = self._get_rows(f'''
        SELECT
          ad_group.id,
          asset.id,
          asset.name,
          asset.type,
          asset.image_asset.full_size.url,
          ad_group_ad_asset_view.field_type,
          asset.text_asset.text,
          asset.youtube_video_asset.youtube_video_id
        FROM
          ad_group_ad_asset_view
        WHERE
          ad_group.id = {ad_group_id}
    ''')
        return [self._build_asset(row) for row in rows]


class AccountAssetsBuilder(StructureBuilder):
    """All assets under an account structure builder."""

    def build(self):
        rows = self._get_rows('''
        SELECT
          asset.name,
          asset.id,
          asset.image_asset.file_size,
          asset.image_asset.full_size.url,
          asset.text_asset.text,
          asset.image_asset.full_size.height_pixels,
          asset.image_asset.full_size.width_pixels,
          asset.youtube_video_asset.youtube_video_id,
          asset.type
        FROM
          asset
    ''')

        # for yt assets get the actual video title instead of asset name
        yt_titles_rows = self._get_rows('''
        SELECT
          video.title,
          video.id
        FROM 
          video
    ''')

        yt_titles = {}
        for row in yt_titles_rows:
            yt_data = self._build_yt_data(row)
            yt_titles[yt_data['yt_id']] = yt_data

        account_assets = {}
        for row in rows:
            asset = self._build_asset(row)
            if asset['type'] == 'YOUTUBE_VIDEO':
                yt_id = yt_titles.get(asset['video_id'])
                if yt_id:
                    asset['name'] = yt_id['yt_title']

            account_assets[asset['id']] = asset

        source_assets = []
        source_rows = self._get_rows(f'''
        SELECT
          asset.id,
          asset.type,
          metrics.all_conversions,
          metrics.impressions,
          metrics.clicks,
          metrics.cost_micros
        FROM
          ad_group_ad_asset_view
        WHERE
          {self._CAMPAIGN_FILTER}
        AND
          {self._AD_GROUP_FILTER}
    ''')

        for row in source_rows:
            source_assets.append(self._build_asset(row))

        for asset in source_assets:
            for k in asset['stats']:
                account_assets[asset['id']]['stats'][k] += asset['stats'][k]

        return list(account_assets.values())


class AccountAdGroupStructureBuilder(StructureBuilder):
    """ Create strucutre of form account:adgroups."""

    def build(self):
        structure = {
            'id': self._customer_id,
            'adgroups': []
        }

        rows = self._get_rows(f'''
        SELECT
          campaign.id,
          campaign.name,
          campaign.status,
          ad_group.id,
          ad_group.name,
          ad_group.status
        FROM
          ad_group
        WHERE
          {self._CAMPAIGN_FILTER}
        AND
          {self._AD_GROUP_FILTER}
    ''')

        for row in rows:
            adgroup_status = self._enums['adgroup_status'](row.ad_group.status).name
            campaign_status = self._enums['campaign_status'](row.campaign.status).name

            ad_group = {
                'id': row.ad_group.id,
                'name': row.ad_group.name,
                'status': adgroup_status,
                'campaign_id': row.campaign.id,
                'campaign_name': row.campaign.name,
                'campaign_status': campaign_status
            }
            structure['adgroups'].append(ad_group)

        return structure


class AccountStructureBuilder(StructureBuilder):
    """MCC structure builder class."""

    def __init__(self, client):
        super().__init__(client, client.login_customer_id)
        self._client = client

    def get_accounts(self):
        accounts = []
        rows = self._get_rows('''
        SELECT
          customer_client.descriptive_name,
          customer_client.id
        FROM
          customer_client
        WHERE
          customer_client.manager = False
    ''')
        for row in rows:
            accounts.append({
                'id': row.customer_client.id,
                'name': row.customer_client.descriptive_name,
            })
        return accounts


class AssetAdgroupsBuilder(StructureBuilder):
    """Creates a specific asset to adgroups mapping.
    If text asset, might return 2 dicts in the list:
    one for description and one for headline"""

    def __init__(self, client, customer_id, asset_id, asset_type):
        super().__init__(client, customer_id)
        self._asset_id = asset_id
        self._asset_type = asset_type

    def build(self):
        asset_info = {
            'id': self._asset_id,
            'type': self._asset_type,
            'adgroups': []
        }

        rows = self._get_rows(f'''
        SELECT
          ad_group.id,
          asset.id,          
          asset.type,
          ad_group_ad_asset_view.field_type,
          ad_group_ad_asset_view.performance_label,
          asset.text_asset.text
        FROM
          ad_group_ad_asset_view
        WHERE
          ad_group_ad_asset_view.enabled = 'TRUE'
        AND
          {self._CAMPAIGN_FILTER}
        AND
          {self._AD_GROUP_FILTER}
        AND
          asset.id = {self._asset_id}
        ''')
               
        # If TEXT, we need 2 entries. Use seperate function.
        if self._asset_type == 'TEXT':
            return self._digest_text_asset(rows)

        for row in rows:
            perf_type = 'nontext'
            asset_info['adgroups'].append(
                {
                    'id': row.ad_group.id,
                    'performance': self._enums['performance_label'](
                        row.ad_group_ad_asset_view.performance_label).name,
                    'performance_type': perf_type
                }
            )
        
        return [asset_info]


    def _digest_text_asset(self, rows):
        """Handels the asset to adgroups mapping of text assets."""
        asset_head = {
            'id' : self._asset_id,
            'type': 'TEXT',
            'text_type': 'headlines',
            'adgroups': []
        }
        asset_desc = {
            'id': self._asset_id,
            'type': 'TEXT',
            'text_type': 'descriptions',
            'adgroups': []
        }

        for row in rows:
            text_type = self._enums['field_type'](
                row.ad_group_ad_asset_view.field_type).name
            
            if text_type == 'HEADLINE':
                asset_head['adgroups'].append(
                    {
                        'id': row.ad_group.id,
                        'performance': self._enums['performance_label'](
                            row.ad_group_ad_asset_view.performance_label).name,
                        'performance_type': 'headlines'
                    }
                )
            else:
                asset_desc['adgroups'].append(
                    {
                        'id': row.ad_group.id,
                        'performance': self._enums['performance_label'](
                            row.ad_group_ad_asset_view.performance_label).name,
                        'performance_type': 'descriptions'
                    }
                )               

        return [asset_head, asset_desc]


def get_assets_adgroups(client,customer_id, asset_id, asset_type):
    builder = AssetAdgroupsBuilder(client,customer_id, asset_id, asset_type)
    return builder.build()


def get_accounts(client):
    builder = AccountStructureBuilder(client)
    return sorted(builder.get_accounts(), key=lambda item: item['name'])


# Tied to upload-asset. Can be removed after refactoring upload
def get_assets_from_adgroup(client, customer_id, ad_group_id):
    builder = AdGroupAssetsStructureBuilder(client, customer_id)
    return builder.build(ad_group_id)


def get_accounts_assets(client, customer_id):
    builder = AccountAssetsBuilder(client, customer_id)
    return sorted(builder.build(),
                  key = lambda item: item['stats']['clicks'], reverse=True)

def get_all_accounts_assets(client):
    accounts = get_accounts(client)
    with futures.ThreadPoolExecutor() as executor:
        account_assets = executor.map(
            lambda account: get_accounts_assets(client, str(account['id'])),
            accounts)
    for account, assets in zip(accounts, account_assets):
        account['assets'] = assets
    return accounts

def get_account_adgroup_structure(client, customer_id):
    """Account structre of the form account:adgroups."""
    builder = AccountAdGroupStructureBuilder(client, customer_id)
    return builder.build()

    # if __name__ == '__main__':
    #    googleads_client = GoogleAdsClient.load_from_storage(
    #        'app/config/google-ads.yaml')
    # create_mcc_struct(googleads_client,
    #                   'app/cache/account_struct.json',
    #                   'app/cache/asset_to_ag.json')
    # print(json.dumps(get_accounts(googleads_client), indent=2))
    # print(json.dumps(
    #     get_assets_from_adgroup(googleads_client, 8791307154, 79845268520),
    #     indent=2))

    # print(json.dumps(get_accounts_assets(googleads_client, '9489090398'),
    #                indent=2))
    # print(json.dumps(get_all_accounts_assets(googleads_client), indent=2))

    # print(get_accounts(googleads_client))
