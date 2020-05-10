/** Different kinds of assets as returned from API */
export enum AssetType {
  TEXT = 'TEXT',
  IMG = 'IMAGE',
  VIDEO = 'YOUTUBE_VIDEO',
  HTML = 'MEDIA_BUNDLE',
}

/** Different kind of adgroups connections to assets */
export enum AssetConn {
  ADGROUP = 'AdGroup',
  HEADLINES = 'Headlines',
  DESC = 'Descriptions',
}

export type AssetAdGroups = Map<AssetConn, number[]>;

interface AssetBase {
  id: number;
  type: string;
  name?: string;
  adgroups?: number[];
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
