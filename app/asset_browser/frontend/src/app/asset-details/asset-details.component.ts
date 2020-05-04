import { Component, Input, OnInit } from '@angular/core';

import { Asset } from './../model/asset';
import { Account } from '../model/account';
import { AssetService } from './../services/asset.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css'],
})
export class AssetDetailsComponent implements OnInit {
  private _account: Account;
  //private _assetAdGroups: number[];
  activeAsset: Asset;

  constructor(private dataService: AssetService) {}

  @Input()
  set account(account: Account) {
    this._account = account;
  }

  get account(): Account {
    return this._account;
  }

  // @Input()
  // set assetAdGroups(adGroupIds: number[]) {
  //   this._assetAdGroups = adGroupIds;
  // }
  // get assetAdGroups(): number[] {
  //   return this.assetAdGroups;
  // }

  ngOnInit(): void {
    this.dataService.activeAsset.subscribe((asset) => {
      this.activeAsset = asset;
      //this.assetAdGroups = this.dataService.getAssetAdGroups(asset?.id);
    });
  }
}
