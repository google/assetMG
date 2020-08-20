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

  def __init__(self, service, customer_id):
    self._service = service
    self._customer_id = str(customer_id)

  def _get_rows(self, query):
    response = self._service.search_stream(self._customer_id, query)
    return RowsIterator(response)

  def build(self):
    return None


class AccountStructureBuilder(StructureBuilder):
  """Account structure builder class."""

  def __init__(self, service, enums, customer_id, name):
    super().__init__(service, customer_id)
    self._enums = enums
    self._name = name

  def _find_or_create_campaing(self, campaign_id):
    try:
      campaign = next(c for c in self._campaigns if c['id'] == campaign_id)
    except StopIteration:
      campaign = {
          'id': campaign_id,
          'adgroups': [],
      }
      self._campaigns.append(campaign)
    return campaign

  def _find_or_create_ad_group(self, campaign_id, ad_group_id):
    campaign = self._find_or_create_campaing(campaign_id)
    try:
      ad_group = next(ag for ag in campaign['adgroups']
                      if ag['id'] == ad_group_id)
    except StopIteration:
      ad_group = {
          'id': ad_group_id,
          'assets': [],
      }
      campaign['adgroups'].append(ad_group)
    return ad_group

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
      asset['text_type'] = self._enums['field_type'].Name(
          row.ad_group_ad_asset_view.field_type)
      asset['asset_text'] = row.asset.text_asset.text.value
    elif asset_type == 'YOUTUBE_VIDEO':
      video_id = row.asset.youtube_video_asset.youtube_video_id.value
      asset['video_id'] = video_id
      asset['link'] = f'https://www.youtube.com/watch?v={video_id}'
      asset['image_url'] = f'https://img.youtube.com/vi/{video_id}/1.jpg'
    return asset

  def build(self):
    self.structure = {
        'id': self._customer_id,
        'name': self._name,
    }
    self._campaigns = []
    rows = self._get_rows('''
        SELECT
          campaign.id,
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
          campaign.advertising_channel_sub_type IN(
            'APP_CAMPAIGN',
            'APP_CAMPAIGN_FOR_ENGAGEMENT',
            'SEARCH_MOBILE_APP',
            'DISPLAY_MOBILE_APP'
          )
    ''')
    for row in rows:
      asset = self._build_asset(row)
      ad_group = self._find_or_create_ad_group(row.campaign.id.value,
                                               row.ad_group.id.value)
      ad_group['assets'].append(asset)
    self.structure['campaigns'] = self._campaigns
    return self.structure


class MCCStructureBuilder(StructureBuilder):
  """MCC structure builder class."""

  def __init__(self, client):
    super().__init__(client.get_service('GoogleAdsService', version='v4'),
                     client.login_customer_id)
    self._enums = {
        'type': client.get_type('AssetTypeEnum').AssetType,
        'field_type': client.get_type('AssetFieldTypeEnum').AssetFieldType,
    }

  def build(self):
    self.structure = []
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
      name = row.customer_client.descriptive_name.value
      customer_id = row.customer_client.id.value
      builder = AccountStructureBuilder(self._service, self._enums,
                                        customer_id, name)
      self.structure.append(builder.build())
    return self.structure


def create_mcc_struct(client):
  builder = MCCStructureBuilder(client)
  structure = builder.build()
  print(json.dumps(structure, indent=2))

if __name__ == '__main__':
  googleads_client = GoogleAdsClient.load_from_storage(
      CONFIG_PATH / 'google-ads.yaml')
  create_mcc_struct(googleads_client)
