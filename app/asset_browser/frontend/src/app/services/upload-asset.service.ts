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
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploadAssetService {
  private API_SERVER = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient) {}

  uploadImage(file: File, adGroups: number[]) {
    const endpoint = this.API_SERVER + '/upload-asset/';
    let imgAsset = {
      account: 7935681790,
      asset_type: 'IMAGE',
      asset_name: file.name,
      path: file,
      adgroups: [95186899405],
    };
    let subscritpion = this.http
      .post(endpoint, imgAsset, { observe: 'response' })
      .subscribe(
        (response) => {
          subscritpion.unsubscribe();
        },
        (error) => {
          subscritpion.unsubscribe();
        }
      );
  }
}
