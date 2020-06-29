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
import { Pipe, PipeTransform } from '@angular/core';

export enum transformAction {
  ADD_DASHES,
  REMOVE_DASHES,
}

@Pipe({
  name: 'cidPipe',
})
export class ClientIDPipe implements PipeTransform {
  transform(value: string, action: transformAction) {
    let newStr = value;
    if (action === transformAction.ADD_DASHES) {
      if (!value.includes('-')) {
        newStr =
          value.slice(0, 3) +
          '-' +
          value.slice(3, 6) +
          '-' +
          value.slice(6, 10);
      }
    } else {
      newStr = value.replace(/-/g, '');
    }
    return newStr;
  }
}
