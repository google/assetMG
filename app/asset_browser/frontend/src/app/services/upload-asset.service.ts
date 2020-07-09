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

@Injectable({
  providedIn: 'root',
})
export class UploadAssetService {
  private API_SERVER = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient) {}

  uploadImage(account: number, fileName: string, adGroups: number[]) {
    const endpoint = this.API_SERVER + '/upload-asset/';

    let imgAsset = {
      account: 7935681790,
      asset_type: 'IMAGE',
      asset_name: 'cow.jpeg',
      adgroups: [95186899405, 96689486386],
    };
    // let imgAsset = {
    //   account: account,
    //   asset_type: 'IMAGE',
    //   asset_name: fileName,
    //   adgroups: [95186899405],
    // };
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

  uploadHtml(account: number, fileName: string, adGroups: number[]) {
    const endpoint = this.API_SERVER + '/upload-asset/';
    let htmlAsset = {
      account: 7935681790,
      asset_type: 'MEDIA_BUNDLE',
      asset_name: 'zip_5MB.zip',
      adgroups: [95186899405, 96689486386],
    };

    let subscritpion = this.http
      .post(endpoint, htmlAsset, { observe: 'response' })
      .subscribe(
        (response) => {
          subscritpion.unsubscribe();
        },
        (error) => {
          subscritpion.unsubscribe();
        }
      );
  }

  uploadVideo(account: number, videoUrl: string, adGroups: number[]) {
    const endpoint = this.API_SERVER + '/upload-asset/';

    let videoAsset = {
      account: 7935681790,
      asset_type: 'YOUTUBE_VIDEO',
      asset_name: 'Awesome vid', //optional
      url: 'https://www.youtube.com/watch?v=UVT3l7dpTRs',
      adgroups: [95186899405, 96689486386],
    };

    let subscritpion = this.http
      .post(endpoint, videoAsset, { observe: 'response' })
      .subscribe(
        (response) => {
          subscritpion.unsubscribe();
        },
        (error) => {
          subscritpion.unsubscribe();
        }
      );
  }

  addTextAsset(
    account: number,
    text: string,
    adGroups: number[],
    isHeadline: boolean
  ) {
    const endpoint = this.API_SERVER + '/upload-asset/';

    let assetType = 'descriptions';
    if (isHeadline) {
      assetType = 'headlines';
    }

    let textAsset = {
      account: 7935681790,
      asset_type: assetType,
      asset_name: '',
      asset_text: 'its a-me! mario!',
      adgroups: [95186899405, 96689486386],
    };

    let subscritpion = this.http
      .post(endpoint, textAsset, { observe: 'response' })
      .subscribe(
        (response) => {
          subscritpion.unsubscribe();
        },
        (error) => {
          subscritpion.unsubscribe();
        }
      );
  }

  // uploadAsset(account: number, assetName: string, assetType: AssetType, adGroups: number[]) {
  //   const endpoint = this.API_SERVER + '/upload-asset/';

  //   let imgAsset = {
  //     account: 7935681790,
  //     asset_type: 'IMAGE',
  //     asset_name: 'cow.jpeg',
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
}
