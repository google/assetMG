import { Asset } from './asset';

export enum STATUS {
  SUCCESS = 200,
  PARTIAL_SUCCESS = 206,
  FAIL = 500,
}

/** Interface for the API response */
export interface UpdateResponse {
  status_code: STATUS;
  msg: string;
  assets: Asset[];
}
