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

export interface UploadResponse {
  status_code: STATUS;
  msg: string;
}
