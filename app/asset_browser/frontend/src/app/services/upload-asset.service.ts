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

  // uploadImage(account: number, fileName: string, adGroups: number[]) {
  //   const endpoint = this.API_SERVER + '/upload-asset/';

  //   let imgAsset = {
  //     account: 7935681790,
  //     asset_type: 'IMAGE',
  //     asset_name: 'onbike.jpeg',
  //     adgroups: [95186899405, 96689486386],
  //   };
  //   // let imgAsset = {
  //   //   account: account,
  //   //   asset_type: 'IMAGE',
  //   //   asset_name: fileName,
  //   //   adgroups: [95186899405],
  //   // };
  //   let subscritpion = this.http
  //     .post(endpoint, imgAsset, { observe: 'response' })
  //     .subscribe(
  //       (response) => {
  //         subscritpion.unsubscribe();
  //       },
  //       (error) => {
  //         subscritpion.unsubscribe();
  //       }
  //     );
  // }

  // uploadHtml(account: number, fileName: string, adGroups: number[]) {
  //   const endpoint = this.API_SERVER + '/upload-asset/';
  //   let htmlAsset = {
  //     account: 7935681790,
  //     asset_type: 'MEDIA_BUNDLE',
  //     asset_name: 'zip_5MB.zip',
  //     adgroups: [95186899405, 96689486386],
  //   };

  //   let subscritpion = this.http
  //     .post(endpoint, htmlAsset, { observe: 'response' })
  //     .subscribe(
  //       (response) => {
  //         subscritpion.unsubscribe();
  //       },
  //       (error) => {
  //         subscritpion.unsubscribe();
  //       }
  //     );
  // }

  // uploadVideo(account: number, videoUrl: string, adGroups: number[]) {
  //   const endpoint = this.API_SERVER + '/upload-asset/';

  //   let videoAsset = {
  //     account: 7935681790,
  //     asset_type: 'YOUTUBE_VIDEO',
  //     asset_name: 'Awesome vid', //optional
  //     url: 'https://www.youtube.com/watch?v=UVT3l7dpTRs',
  //     adgroups: [95186899405, 96689486386],
  //   };

  //   let subscritpion = this.http
  //     .post(endpoint, videoAsset, { observe: 'response' })
  //     .subscribe(
  //       (response) => {
  //         subscritpion.unsubscribe();
  //       },
  //       (error) => {
  //         subscritpion.unsubscribe();
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

    console.log('Text Asset', textAsset);
    let subscription = this.http
      .post(endpoint, textAsset, { observe: 'response' })
      .subscribe(
        (response) => {
          this._uploadFinished$.next({
            status_code: response.status,
            msg:
              response.status === STATUS.SUCCESS
                ? ''
                : response.body.toString(),
          });
          subscription.unsubscribe();
        },
        (error) => {
          this._uploadFinished$.next({
            status_code: STATUS.FAIL,
            msg: 'Upload failed',
          });
          subscription.unsubscribe();
        }
      );
  }

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

    console.log('Asset', asset);
    let subscription = this.http
      .post(endpoint, asset, { observe: 'response' })
      .subscribe(
        (response) => {
          this._uploadFinished$.next({
            status_code: response.status,
            msg:
              response.status === STATUS.SUCCESS
                ? ''
                : response.body.toString(),
          });
          subscription.unsubscribe();
        },
        (error) => {
          this._uploadFinished$.next({
            status_code: STATUS.FAIL,
            msg: 'Upload failed',
          });
          subscription.unsubscribe();
        }
      );
  }
}
