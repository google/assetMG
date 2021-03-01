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

export interface ConfigSettings {
  client_customer_id: number;
  client_id: string;
  client_secret: string;
  developer_token: string;
  redirect_uri?: string;
  refresh_token?: string;
  config_valid?: boolean;
}

export interface YouTubeSettings {
  channel_id: string;
  api_key: string;
}