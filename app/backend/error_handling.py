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


ERROR_TO_MESSAGE = {
     'CollectionSizeError.TOO_MANY' : 'Could not assign asset. This ad has reached the max amount of this asset type',
     'CollectionSizeError.TOO_FEW' : 'Could not remove asset. This ad has reached the minimum amount of this asset type',
     'YoutubeAdVideoRegistrationError{super=YoutubeAdVideoRegistrationError.VIDEO_NOT_ACCESSIBLE' : 'YouTube video link is not accessible',
     'MediaUploadError{super=MediaUploadError.INVALID_MIME_TYPE' : 'HTML5 Bundle not valid',
     'ImageError.UNEXPECTED_SIZE' : 'Image dimensions are invalid'
}

GENERAL_ERROR_MESSAGE = 'Could not complete action.'

def error_mapping(err):
  # Error string parsing
  error = err.split('@')[0]
  if error:
    error = error[1:-1]
    err_msg = ERROR_TO_MESSAGE.get(error)
    if err_msg:
      return err_msg
  return GENERAL_ERROR_MESSAGE
