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
import { subscribeOn } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'styleErrorMsg',
})
export class ErrorMsgPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: any, ...args: unknown[]): unknown {
    // Remove Error code if it exists
    let newValue = value.replace('403 ', '');
    // Add new lines to make it more readible
    newValue = newValue.replaceAll('. ', '.\n\n');
    // add an html tag to links
    let urlStartIdx = newValue.indexOf('https://');
    let urlEndIdx = newValue.indexOf(' ', urlStartIdx);

    let startTag =
      '<a href="' +
      newValue.substring(urlStartIdx, urlEndIdx) +
      '"target="_blank">';
    let endTag = '</a>';

    newValue =
      newValue.substring(0, urlStartIdx) +
      startTag +
      newValue.substring(urlStartIdx, urlEndIdx) +
      endTag +
      newValue.substring(urlEndIdx);

    return this.sanitizer.bypassSecurityTrustHtml(newValue);
  }
}
