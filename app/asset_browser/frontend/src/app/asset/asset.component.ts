import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Asset, AssetType } from './../model/asset';
import { AssetService } from './../services/asset.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css'],
})
export class AssetComponent implements OnInit {
  assetType = AssetType;
  private _asset: Asset;
  @Input()
  set asset(asset: any) {
    this._asset = asset;
  }
  get asset(): any {
    return this._asset;
  }

  @Input()
  selectedAssetId: number;

  constructor(private router: Router, private dataService: AssetService) {}

  ngOnInit(): void {}

  openDetails() {
    this.dataService.changeAsset(this.asset);
  }
}
