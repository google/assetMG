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

import json
from google.api_core import protobuf_helpers
from google.ads.googleads.client import GoogleAdsClient
from app.backend.service import GoogleAds_Service
import proto

ASSET_TYPE_MAP = {
    'IMAGE': 'AdImageAsset',
    'YOUTUBE_VIDEO': 'AdVideoAsset',
    'HTML5': 'AdMediaBundleAsset',
    'TEXT' : 'AdTextAsset'
}

def mutate_ad(client, customer_id, adgroup, asset, action, text_type_to_assign='descriptions'):

    # Setup services and operations
    asset_service = GoogleAds_Service.get_service(client, 'AssetService')
    ad_service = GoogleAds_Service.get_service(client, 'AdService')
    ad_group_ad_service = GoogleAds_Service.get_service(client, 'AdGroupAdService')
    googleads_service = GoogleAds_Service.get_service(client, 'GoogleAdsService')
    asset_object = GoogleAds_Service.get_type(client, ASSET_TYPE_MAP[asset['type']])
    ad_operation = GoogleAds_Service.get_type(client, 'AdOperation')

    if asset['type'] != 'TEXT':
        asset_object.asset = asset_service.asset_path(customer_id, asset['id'])
    ad_updated = ad_operation.update

    # Get the ad group ad we want to modify
    query = f"""
        SELECT
            ad_group_ad.resource_name,
            ad_group_ad.ad.app_ad.images,
            ad_group_ad.ad.app_ad.html5_media_bundles,
            ad_group_ad.ad.app_ad.headlines,
            ad_group_ad.ad.app_ad.descriptions,
            ad_group_ad.ad.app_ad.youtube_videos
        FROM ad_group_ad
        WHERE ad_group.id = '{adgroup}'"""

    response = googleads_service.search_stream(customer_id=customer_id, query=query)

    # Extract the ad object
    for batch in response:
        for row in batch.results:
            ad_original = row.ad_group_ad.ad

    proto.Message.copy_from(ad_updated, ad_original)
    # Get asset list of relevant type
    asset_list_handler = ''
    if asset['type'] == 'IMAGE':
        asset_list_handler = ad_updated.app_ad.images
    if asset['type'] == 'YOUTUBE_VIDEO':
        asset_list_handler = ad_updated.app_ad.youtube_videos
    if asset['type'] == 'HTML5':
        asset_list_handler = ad_updated.app_ad.html5_media_bundles
    if asset['type'] == 'TEXT':
        asset_object.text = asset['asset_text']
        if text_type_to_assign == 'descriptions':
            asset_list_handler = ad_updated.app_ad.descriptions
        else:
            asset_list_handler = ad_updated.app_ad.headlines
    
    # Set action
    if action == 'ADD':
        asset_list_handler.append(asset_object)
    elif action == 'REMOVE':
        asset_list_handler.remove(asset_object)
           
    # Set Field mask
    field_mask = protobuf_helpers.field_mask(ad_original._pb, ad_updated._pb)
    client.copy_from(ad_operation.update_mask, field_mask)

    # Execute mutation
    ad_service.mutate_ads(customer_id=customer_id, operations=[ad_operation])

