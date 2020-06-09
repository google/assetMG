import { Asset } from './asset';

/** Interface for the API response */
export interface UpdateResponse {
  success: boolean;
  msg: string;
  assets: Asset[];
}
