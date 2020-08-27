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
from google.ads.google_ads.client import GoogleAdsClient


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

  def __init__(self, client, customer_id):
    self._service = client.get_service('GoogleAdsService', version='v4')
    self._customer_id = customer_id
    self._enums = {
        'type': client.get_type('AssetTypeEnum').AssetType,
        'field_type': client.get_type('AssetFieldTypeEnum').AssetFieldType,
    }

  def _get_rows(self, query, account=None):
    if account:
      cid = account
    else:
      cid = str((self._customer_id))

    response = self._service.search_stream(cid, query)
    return RowsIterator(response)

  def _build_asset(self, row):
    asset_type = self._enums['type'].Name(row.asset.type)
    asset = {
        'id': row.asset.id.value,
        'name': row.asset.name.value,
        'type': asset_type,
        'stats':{
          'clicks': row.metrics.clicks.value,
          'all_conversions' : row.metrics.all_conversions.value,
          'impressions': row.metrics.impressions.value,
          'cost':row.metrics.cost_micros.value / 1000000
        }
    }
    if asset_type == 'IMAGE':
      asset['image_url'] = row.asset.image_asset.full_size.url.value
      asset['file_size'] = row.asset.image_asset.file_size.value
      asset['image_height'] = row.asset.image_asset.full_size.height_pixels.value
      asset['image_width'] = row.asset.image_asset.full_size.width_pixels.value
    elif asset_type == 'TEXT':
      text_type = self._enums['field_type'].Name(
          row.ad_group_ad_asset_view.field_type)
      asset['text_type'] = text_type.lower() + 's'
      asset['asset_text'] = row.asset.text_asset.text.value
    elif asset_type == 'YOUTUBE_VIDEO':
      video_id = row.asset.youtube_video_asset.youtube_video_id.value
      asset['video_id'] = video_id
      asset['link'] = f'https://www.youtube.com/watch?v={video_id}'
      asset['image_url'] = f'https://img.youtube.com/vi/{video_id}/1.jpg'
    return asset

  def build(self):
    return None


class AdGroupAssetsStructureBuilder(StructureBuilder):
  """Ad group assets structure builder class."""

  def build(self, ad_group_id, account):
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

  def build(self,account, mcc_struct_file):
    rows = self._get_rows(f'''
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
      ''', account)

    account_assets = {}
    for row in rows:
      asset = self._build_asset(row)
      account_assets[str(asset['id'])] = asset
      

    with open(mcc_struct_file, 'r') as f:
      struc = json.load(f)

    for acc in struc:
      if acc['id'] == int(account):
        account_campaigns_handler = acc['campaigns']
        break

    if account_campaigns_handler:
      for campaign in account_campaigns_handler:
        for adgroup in campaign['adgroups']:
          for asset in adgroup['assets']:
            asset_id = asset['id']
            for k in asset['stats']:
              account_assets[str(asset_id)]['stats'][k] += asset['stats'][k]
            
    return list(account_assets.values())


class AccountStructureBuilder(StructureBuilder):
  """Account structure builder class."""

  _CAMPAIGN_FILTER = '''
      campaign.advertising_channel_sub_type IN(
        'APP_CAMPAIGN',
        'APP_CAMPAIGN_FOR_ENGAGEMENT',
        'SEARCH_MOBILE_APP',
        'DISPLAY_MOBILE_APP'
      )
      AND campaign.status NOT IN('REMOVED')
  '''

  _AD_GROUP_FILTER = '''
  ad_group.status NOT IN ('REMOVED')
  '''

  def __init__(self, client, customer_id, name):
    super().__init__(client, customer_id)
    self._name = name
    self._status_enums = {
      "adgroup_status": client.get_type('AdGroupStatusEnum').AdGroupStatus,
      "campaign_status" : client.get_type('CampaignStatusEnum').CampaignStatus,
    }

  def _populate_campaigns_and_ad_groups(self):
    self._campaigns = []
    self._ad_groups = {}
    campaigns = {}

    rows = self._get_rows(f'''
        SELECT
          campaign.id,
          campaign.name,
          campaign.status
        FROM
          campaign
        WHERE
          {self._CAMPAIGN_FILTER}
    ''')
    for row in rows:
      campaign_status = self._status_enums['campaign_status'].Name(row.campaign.status)
      campaign = {
          'id': row.campaign.id.value,
          'campaign_name': row.campaign.name.value,
          'status': campaign_status,
          'adgroups': [],
      }
      self._campaigns.append(campaign)
      campaigns[campaign['id']] = campaign

    rows = self._get_rows(f'''
        SELECT
          campaign.id,
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
      adgroup_status = self._status_enums['adgroup_status'].Name(row.ad_group.status)
      ad_group = {
          'id': row.ad_group.id.value,
          'name': row.ad_group.name.value,
          'status': adgroup_status,
          'assets': [],
      }
      campaigns[row.campaign.id.value]['adgroups'].append(ad_group)
      self._ad_groups[ad_group['id']] = ad_group

  def build(self):
    structure = {
        'id': self._customer_id,
        'name': self._name,
    }
    self._populate_campaigns_and_ad_groups()
    rows = self._get_rows(f'''
        SELECT
          ad_group.id,
          asset.id,
          asset.name,
          asset.type,
          asset.image_asset.full_size.url,
          asset.image_asset.file_size,
          asset.image_asset.full_size.height_pixels,
          asset.image_asset.full_size.width_pixels,
          ad_group_ad_asset_view.field_type,
          asset.text_asset.text,
          asset.youtube_video_asset.youtube_video_id,
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
    for row in rows:
      asset = self._build_asset(row)
      self._ad_groups[row.ad_group.id.value]['assets'].append(asset)
    structure['campaigns'] = self._campaigns
    return structure


class MCCStructureBuilder(StructureBuilder):
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
          'id': row.customer_client.id.value,
          'name': row.customer_client.descriptive_name.value,
      })
    return accounts

  def build(self):
    structure = []
    accounts = self.get_accounts()
    for account in accounts:
      builder = AccountStructureBuilder(
          self._client, account['id'], account['name'])
      structure.append(builder.build())
    return structure


def create_mcc_struct(client, mcc_struct_file, assets_file):
  builder = MCCStructureBuilder(client)
  structure = builder.build()
  with open(mcc_struct_file, 'w') as f:
    json.dump(structure, f, indent=2)
  assets = {}
  for account in structure:
    for campaign in account['campaigns']:
      for ad_group in campaign['adgroups']:
        for asset in ad_group['assets']:
          try:
            assets[asset['id']]['adgroups'].append(ad_group['id'])
          except KeyError:
            assets[asset['id']] = asset
            assets[asset['id']]['adgroups'] = [ad_group['id']]
  with open(assets_file, 'w') as f:
    json.dump(list(assets.values()), f, indent=2)


def get_accounts(client):
  builder = MCCStructureBuilder(client)
  return builder.get_accounts()


def get_assets_from_adgroup(client, customer_id, ad_group_id):
  builder = AdGroupAssetsStructureBuilder(client, customer_id)
  return builder.build(ad_group_id)


def get_accounts_assets(client, customer_id, mcc_struct_file):
  builder = AccountAssetsBuilder(client, customer_id)
  return builder.build(customer_id,mcc_struct_file)


def get_all_accounts_assets(client, mcc_struct_file):
  accounts = get_accounts(client)
  for account in accounts:
    account['assets'] = get_accounts_assets(client,str(account['id']),mcc_struct_file)
  return accounts


if __name__ == '__main__':
  googleads_client = GoogleAdsClient.load_from_storage(
      'app/config/google-ads.yaml')
  # create_mcc_struct(googleads_client,
  #                   'app/cache/account_struct.json',
  #                   'app/cache/asset_to_ag.json')
  # print(json.dumps(get_accounts(googleads_client), indent=2))
  # print(json.dumps(
  #     get_assets_from_adgroup(googleads_client, 8791307154, 79845268520),
  #     indent=2))

  # print(json.dumps(get_accounts_assets(googleads_client,'9489090398')))
  print(get_accounts_assets(googleads_client,'9489090398','app/cache/account_struct.json'))