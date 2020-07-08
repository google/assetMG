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
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


import { Asset, AssetType, ImgAsset } from './../model/asset';
import { AssetService } from './../services/asset.service';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css'],
})
export class AssetComponent implements OnInit {
  assetType = AssetType;
  private _asset: Asset;
  @Input()
  set asset(asset: Asset) {
    this._asset = asset;
  }
  get asset(): Asset {
    return this._asset;
  }

  @Input()
  selectedAssetId: number;

  constructor(private router: Router, private dataService: AssetService, private _previewDialog: MatDialog) {}

  ngOnInit(): void {}

  openDetails() {
    this.dataService.changeAsset(this.asset);
  }

  openPreview(){
    if (this._asset.type === AssetType.IMG){
      let url = (this._asset as ImgAsset).image_url
    }
    this._previewDialog.open(PreviewComponent,{data:{
    }});
  }
}


