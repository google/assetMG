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

// Represents an a single ad group (as part of the account structure)
// i.e. It usually is part of a campaign struct and contains a list of Assets in it.
interface AdGroupStruct {
  id: number;
  name: string;
  assets?: any[];
}

interface CampaignStruct {
  id: number;
  campaign_name: string;
  adgroups?: AdGroupStruct[];
}

export interface Account {
  id: number;
  name: string;
  campaigns?: CampaignStruct[];
}

// Represents an adgroup and its status
export interface AdGroup {
  id: number;
  name: string;
  status: string;
  campaign_name: string;
  campaign_id: number;
  campaign_status: string;
}

// Used to represent all the adgroups in an account and their status
export interface AccountAGs {
  id: number;
  adgroups: AdGroup[];
}
