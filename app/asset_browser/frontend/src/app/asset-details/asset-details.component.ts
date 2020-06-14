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
    this.dataService.activeAsset$.subscribe((asset) => {
      this.activeAsset = asset;
    });
  }
}
