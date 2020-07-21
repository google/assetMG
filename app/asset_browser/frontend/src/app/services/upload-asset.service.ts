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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssetType } from '../model/asset';
import { Observable, BehaviorSubject } from 'rxjs';
import { UploadResponse, STATUS } from '../model/response';

@Injectable({
  providedIn: 'root',
})
export class UploadAssetService {
  private API_SERVER = 'http://127.0.0.1:5000';

  /** Gets updated when the update Asset is called */
  private _uploadFinished$ = new BehaviorSubject<UploadResponse>(null);
  uploadFinished$ = this._uploadFinished$.asObservable();

  constructor(private http: HttpClient) {}

  // /** Used for text assets only */
  // addTextAsset(
  //   account: number,
  //   text: string,
  //   assetType: AssetType,
  //   adGroups: number[]
  // ) {
  //   const endpoint = this.API_SERVER + '/upload-asset/';

  //   let textAsset = {
  //     account: account,
  //     asset_type: assetType,
  //     asset_name: '',
  //     asset_text: text,
  //     adgroups: adGroups,
  //   };

  //   let subscription = this.http
  //     .post(endpoint, textAsset, { observe: 'response' })
  //     .subscribe(
  //       (response) => {
  //         console.log('Response: ', response);
  //         this._uploadFinished$.next({
  //           status_code: response.status,
  //           asset:
  //             response.status === STATUS.SUCCESS
  //               ? (<UploadResponse>response.body).asset
  //               : null,
  //           msg:
  //             response.status === STATUS.SUCCESS
  //               ? ''
  //               : (<UploadResponse>response.body).msg,
  //         });
  //         subscription.unsubscribe();
  //       },
  //       (error) => {
  //         this._uploadFinished$.next({
  //           status_code: STATUS.FAIL,
  //           msg: 'Upload failed',
  //         });
  //         subscription.unsubscribe();
  //       }
  //     );
  // }

  /** Used for text assets only */
  addTextAsset(
    account: number,
    text: string,
    assetType: AssetType,
    adGroups: number[]
  ) {
    const endpoint = this.API_SERVER + '/upload-asset/';

    let textAsset = {
      account: account,
      asset_type: assetType,
      asset_name: '',
      asset_text: text,
      adgroups: adGroups,
    };

    return this.http.post(endpoint, textAsset, { observe: 'response' });
  }

  // /** Used for all non-text assets */
  // uploadAsset(
  //   account: number,
  //   assetName: string,
  //   assetType: AssetType,
  //   adGroups: number[],
  //   url?: string
  // ) {
  //   let asset;
  //   const endpoint = this.API_SERVER + '/upload-asset/';

  //   if (assetType === AssetType.VIDEO) {
  //     asset = {
  //       account: account,
  //       asset_type: assetType,
  //       asset_name: assetName,
  //       url: url,
  //       adgroups: adGroups,
  //     };
  //   } else {
  //     asset = {
  //       account: account,
  //       asset_type: assetType,
  //       asset_name: assetName,
  //       adgroups: adGroups,
  //     };
  //   }

  //   let subscription = this.http
  //     .post(endpoint, asset, { observe: 'response' })
  //     .subscribe(
  //       (response) => {
  //         console.log('Response: ', response);
  //         this._uploadFinished$.next({
  //           status_code: response.status,
  //           asset:
  //             response.status === STATUS.SUCCESS
  //               ? (<UploadResponse>response.body).asset
  //               : null,
  //           msg:
  //             response.status === STATUS.SUCCESS
  //               ? ''
  //               : (<UploadResponse>response.body).msg,
  //         });
  //         subscription.unsubscribe();
  //       },
  //       (error) => {
  //         this._uploadFinished$.next({
  //           status_code: STATUS.FAIL,
  //           msg: 'Upload failed',
  //         });
  //         subscription.unsubscribe();
  //       }
  //     );
  // }

  /** Used for all non-text assets */
  uploadAsset(
    account: number,
    assetName: string,
    assetType: AssetType,
    adGroups: number[],
    url?: string
  ) {
    let asset;
    const endpoint = this.API_SERVER + '/upload-asset/';

    if (assetType === AssetType.VIDEO) {
      asset = {
        account: account,
        asset_type: assetType,
        asset_name: assetName,
        url: url,
        adgroups: adGroups,
      };
    } else {
      asset = {
        account: account,
        asset_type: assetType,
        asset_name: assetName,
        adgroups: adGroups,
      };
    }

    return this.http.post(endpoint, asset, { observe: 'response' });
  }

  clearUploads() {
    const endpoint = this.API_SERVER + '/clean-dir/';
    let subscritpion = this.http.get(endpoint).subscribe((_) => {
      subscritpion.unsubscribe();
    });
  }
}
