"""Playground for using Google Ads reporting for fetching account structure."""

import json
from pathlib import Path
from google.ads.google_ads.client import GoogleAdsClient


CONFIG_PATH = Path('app/config/')


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
    self._customer_id = str(customer_id)
    self._enums = {
        'type': client.get_type('AssetTypeEnum').AssetType,
        'field_type': client.get_type('AssetFieldTypeEnum').AssetFieldType,
    }

  def _get_rows(self, query):
    response = self._service.search_stream(self._customer_id, query)
    return RowsIterator(response)

  def _build_asset(self, row):
    asset_type = self._enums['type'].Name(row.asset.type)
    asset = {
        'id': row.asset.id.value,
        'name': row.asset.name.value,
        'type': asset_type,
    }
    if asset_type == 'IMAGE':
      asset['image_url'] = row.asset.image_asset.full_size.url.value
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

  def build(self, ad_group_id):
    rows = self._get_rows(f'''
        SELECT
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


class AccountStructureBuilder(StructureBuilder):
  """Account structure builder class."""

  _CAMPAIGN_FILTER = '''
      campaign.advertising_channel_sub_type IN(
        'APP_CAMPAIGN',
        'APP_CAMPAIGN_FOR_ENGAGEMENT',
        'SEARCH_MOBILE_APP',
        'DISPLAY_MOBILE_APP'
      )
  '''

  def __init__(self, client, customer_id, name):
    super().__init__(client, customer_id)
    self._name = name

  def _populate_campaigns_and_ad_groups(self):
    self._campaigns = []
    self._ad_groups = {}
    campaigns = {}

    rows = self._get_rows(f'''
        SELECT
          campaign.id,
          campaign.name
        FROM
          campaign
        WHERE
          {self._CAMPAIGN_FILTER}
    ''')
    for row in rows:
      campaign = {
          'id': row.campaign.id.value,
          'campaign_name': row.campaign.name.value,
          'adgroups': [],
      }
      self._campaigns.append(campaign)
      campaigns[campaign['id']] = campaign

    rows = self._get_rows(f'''
        SELECT
          campaign.id,
          ad_group.id,
          ad_group.name
        FROM
          ad_group
        WHERE
          {self._CAMPAIGN_FILTER}
    ''')
    for row in rows:
      ad_group = {
          'id': row.ad_group.id.value,
          'name': row.ad_group.name.value,
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
          ad_group_ad_asset_view.field_type,
          asset.text_asset.text,
          asset.youtube_video_asset.youtube_video_id
        FROM
          ad_group_ad_asset_view
        WHERE
          {self._CAMPAIGN_FILTER}
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


if __name__ == '__main__':
  googleads_client = GoogleAdsClient.load_from_storage(
      CONFIG_PATH / 'google-ads.yaml')
  create_mcc_struct(googleads_client,
                    'app/cache/account_struct_2.json',
                    'app/cache/asset_to_ag_2.json')

