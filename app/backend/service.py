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

import yaml
import app.backend.setup as setup
from app.backend.setup import CONFIG_PATH

GA_API_VERSION = 'v9'

class GoogleAds_Service:
 
  # SERVICES
  @staticmethod
  def get_service(client, service):
    return client.get_service(service, version=GA_API_VERSION)

  # TYPES
  @staticmethod
  def get_type(client, type):
    return client.get_type(type, version=GA_API_VERSION)
