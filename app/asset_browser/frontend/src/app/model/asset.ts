/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Different kinds of assets as returned from API */
export enum AssetType {
  TEXT = 'TEXT',
  TEXT_HEADLINE = 'headlines',
  TEXT_DESC = 'descriptions',
  IMG = 'IMAGE',
  VIDEO = 'YOUTUBE_VIDEO',
  HTML = 'MEDIA_BUNDLE',
  ALL = 'ALL', // Mainly used for filtering
}

/** Different kind of adgroups connections to assets */
export enum AssetConnType {
  ADGROUP = 'AdGroup',
  HEADLINE = 'Headlines',
  DESC = 'Descriptions',
}

export enum MutateAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export type AssetAdGroups = Map<AssetConnType, AssetAdGroup[]>;

interface AssetAdGroup {
  id: number;
  performance: string;
  performance_type: string;
}

interface AssetStats {
  clicks: number;
  all_conversions: number;
  impressions: number;
  cost: number;
}

interface AssetBase {
  id: number;
  type: string;
  name?: string;
  adgroups?: AssetAdGroup[];
  stats?: AssetStats;
  performance?: string;
}

export interface ImgAsset extends AssetBase {
  image_url: string;
  file_size?: number;
  image_height?: number;
  image_width?: number;
}

export interface TextAsset extends AssetBase {
  asset_text: string;
  text_type?: string;
}

export interface VideoAsset extends AssetBase {
  image_url: string;
  video_id: string;
  link: string;
}

export interface HtmlAsset extends AssetBase {}
export type Asset = ImgAsset | TextAsset | VideoAsset | HtmlAsset;
export interface MutateAsset {
  id: number;
  type: AssetType;
  asset_text?: string; // for TEXT
  text_type_to_assign?: string; // for TEXT - headlines or description
  video_id?: string; // for VIDEO
}

export interface MutateRecord {
  account: number;
  adgroup: number;
  action: MutateAction;
  asset: MutateAsset;
}
