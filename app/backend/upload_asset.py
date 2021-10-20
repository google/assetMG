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

"""This module allows uploading new assets to a google ads account.

This module allows uploading assets through the assetMG tool, and assigning them
to a list of adgroups utilaizing the mutate module.
"""

import app.backend.mutate as mutate
from app.backend.error_handling import error_mapping
from app.backend.structure import get_assets_from_adgroup
from app.backend.helpers import populate_adgroup_details, get_image_url
from app.backend.service import GoogleAds_Service
import urllib

yt_thumbnail_url = 'https://img.youtube.com/vi/%s/1.jpg'

def _extract_text_asset_info(googleads_client, account, thin_asset, adgroup):
    """Retrive text-assets info from an adgroup it was assigned to"""
    adgroups_assets = get_assets_from_adgroup(googleads_client, account, adgroup["id"])

    for asset in adgroups_assets:
        if asset['type'] == 'TEXT':
            if (asset['asset_text'] == thin_asset['asset_text']
                    and asset['text_type'] == thin_asset['text_type']):
                return asset


def _assign_new_asset_to_adgroups(googleads_client, account, asset,
                                  adgroups, text_type='descriptions', global_ga_client =None):
    """Assigns the new asset uploaded to the given ad groups, using the mutate
    module."""
    # common_typos_disable
    successeful_assign = []
    unsuccesseful_assign = []
    asset['adgroups'] = []

    if not adgroups:
        return {'asset': asset, 'status': -1}

    for ag in adgroups:
        # mutate_ad returns None if it finishes succesfully
        try:
            mutate.mutate_ad(googleads_client, account, ag, asset, 'ADD', text_type)
            successeful_assign.append({"id": ag})
        except Exception as e:
            unsuccesseful_assign.append({
                'adgroup': populate_adgroup_details(googleads_client, account, ag),
                'error_message': error_mapping(str(e)), 'err': str(e)
            })
    # assignment status:
    #   0 - succesfull,
    #   1 - partialy succesfull,
    #   2 - unsuccesfull,
    #  -1 - no adgroups to assign
    status = 2

    # if successfully assigend only to some ad groups
    if successeful_assign and unsuccesseful_assign:
        status = 1

    # if successefully assigned to all ad groups
    elif successeful_assign:
        status = 0

    # if text assets aren't assigned to any adgroup they weren't uploaded
    if asset['type'] == 'TEXT' and status == 2:
        return {
            'status': 3,
            'unsuccessfull': unsuccesseful_assign
        }

    if asset['type'] == 'TEXT' and successeful_assign:
        asset = _extract_text_asset_info(
            global_ga_client, account, asset, successeful_assign[0])

    asset['adgroups'] = successeful_assign

    return {
        'asset': asset,
        'status': status,
        'successfull': successeful_assign,
        'unsuccessfull': unsuccesseful_assign
    }


def upload(googleads_client,
           global_ga_client,
           account,
           asset_type,
           asset_name,
           asset_text='',
           path='',
           url='',
           adgroups=[]):

    asset_service = GoogleAds_Service.get_service(googleads_client, 'AssetService')
    asset_operation = GoogleAds_Service.get_type(googleads_client, 'AssetOperation')
    asset = asset_operation.create
    asset.name = asset_name

    new_asset = {}

    # TEXT ASSET
    if asset_type in ['descriptions', 'headlines']:
        new_asset = {
            'id': None,
            'name': asset_name,
            'type': 'TEXT',
            'text_type': asset_type,
            'asset_text': asset_text
        }
        return _assign_new_asset_to_adgroups(
            googleads_client, account, new_asset, adgroups, asset_type, global_ga_client)

    # IMAGE ASSET
    if asset_type == 'IMAGE':
        with open(path, 'rb') as image_handle:
            image_content = image_handle.read()

        asset.type_ = googleads_client.enums.AssetTypeEnum.IMAGE
        asset.image_asset.data = image_content

    # YT VIDEO ASSET
    if asset_type == 'YOUTUBE_VIDEO':
        url_data = urllib.parse.urlparse(url)
        if url_data.netloc == 'youtu.be':
            video_id = url_data.path.lstrip('/')
        else:
            query = urllib.parse.parse_qs(url_data.query)
            video_id = query['v'][0]

        asset.type_ = googleads_client.enums.AssetTypeEnum.YOUTUBE_VIDEO
        asset.youtube_video_asset.youtube_video_id = video_id
        new_asset['image_url'] = yt_thumbnail_url%(video_id)

    # HTML5 ASSET
    if asset_type == 'MEDIA_BUNDLE':
        with open(path, 'rb') as html_handle:
                html_content = html_handle.read()

        asset.type_ = googleads_client.enums.AssetTypeEnum.MEDIA_BUNDLE
        asset.media_bundle_asset.data = html_content


    mutate_asset_response = asset_service.mutate_assets(
    customer_id=account, operations=[asset_operation]
    )

    for row in mutate_asset_response.results:
        asset_id = row.resource_name.split('/')[-1]

    new_asset['id'] = asset_id
    new_asset['type'] = asset_type
    new_asset['name'] = asset_name
    if asset_type == 'IMAGE':
        new_asset['image_url'] = get_image_url(googleads_client,account,asset_id)

    return _assign_new_asset_to_adgroups(
        googleads_client, account, new_asset, adgroups, global_ga_client)