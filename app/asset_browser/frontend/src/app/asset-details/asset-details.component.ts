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
  activeAsset: Asset;

  constructor(private dataService: AssetService) {}

  @Input()
  set account(account: Account) {
    this._account = account;
  }

  get account(): Account {
    return this._account;
  }

  ngOnInit(): void {
    this.dataService.activeAsset.subscribe((asset) => {
      this.activeAsset = asset;
    });
  }
}
