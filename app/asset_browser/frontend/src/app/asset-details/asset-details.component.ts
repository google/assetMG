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
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {
  Asset,
  MutateRecord,
  MutateAction,
  AssetConnType,
  MutateAsset,
  AssetType,
  TextAsset,
  VideoAsset,
} from './../model/asset';
import { Account } from '../model/account';
import { AssetService } from './../services/asset.service';
import { STATUS } from '../model/response';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AccountStructComponent,
  AdGroupRow,
  AssetConn,
} from '../account-struct/account-struct.component';
import { Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css'],
})
export class AssetDetailsComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  private _account: Account;
  private _activeAsset: Asset;
  assetType = AssetType;

  /** Update button params */
  updateInProgress: boolean = false;
  updateMessage: string = '';
  isErrorMessage: boolean = false;

  get asset(): any {
    return this._activeAsset;
  }

  @Input()
  set account(account: Account) {
    this._account = account;
  }

  get account(): Account {
    return this._account;
  }

  @Input() closeAssetDetails: Function;
  @ViewChild('accountAdGroups') accountAdGroups: AccountStructComponent;

  constructor(
    private dataService: AssetService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._subscriptions.push(
      this.dataService.activeAsset$.subscribe((asset) => {
        this._activeAsset = asset;
      })
    );

    this._subscriptions.push(
      this.dataService.activeAssetAdGroups$.subscribe((adGroups) => {
        this.updateMessage = '';
        this.isErrorMessage = false;
      })
    );

    this._subscriptions.push(
      this.dataService.updateFinished$.subscribe((response) => {
        this.updateInProgress = false;
        if (response) {
          this.updateMessage = response.msg;
          this.isErrorMessage = response.status_code !== STATUS.SUCCESS;
          if (!this.isErrorMessage) {
            // Update succeeded - reset the checkboxes edit state
            this.accountAdGroups.resetEditedRows();
            this._snackBar.open('Updated Successfully', '', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        }
      })
    );
  }

  ngOnDestroy() {
    for (let sub of this._subscriptions) {
      sub.unsubscribe();
    }
  }

  onClose() {
    this.closeAssetDetails();
  }

  updateAsset() {
    let mutateRecords: MutateRecord[] = [];
    this.accountAdGroups.getUpdatedRows().forEach((row) => {
      mutateRecords.push(...this.createMutateRecord(row));
    });

    // console.log('Updates: ', this.accountAdGroups.getUpdatedRows());
    // console.log('Mutate: ', mutateRecords);

    if (mutateRecords.length) {
      this.updateInProgress = true;
      this.dataService.updateAsset(this.asset, mutateRecords);
    }
  }

  loadAdGroups() {
    this.accountAdGroups.sortBySelection();
    this.accountAdGroups.resetEditedRows();
  }

  private createMutateRecord(row: AdGroupRow): MutateRecord[] {
    // Assume it's a non-text asset unless it is text
    let selArray: any;
    let mutateObjs = [];
    let connection = AssetConnType.ADGROUP;

    if (this.asset.type != this.assetType.TEXT) {
      selArray = this.accountAdGroups.adgroup_sel;
      mutateObjs.push(this.createMutateObj(connection, row, selArray));
    } else {
      if (row.isEdited[AssetConn.HEADLINE]) {
        connection = AssetConnType.HEADLINE;
        selArray = this.accountAdGroups.headline_sel;
        mutateObjs.push(this.createMutateObj(connection, row, selArray));
      }
      if (row.isEdited[AssetConn.DESC]) {
        connection = AssetConnType.DESC;
        selArray = this.accountAdGroups.description_sel;
        mutateObjs.push(this.createMutateObj(connection, row, selArray));
      }
    }
    return mutateObjs;
  }

  /** Helper function to create the mutate Object */
  private createMutateObj(
    connection: AssetConnType,
    row: AdGroupRow,
    selArray: SelectionModel<AdGroupRow>
  ) {
    // Check if its added or removed
    let action = selArray.isSelected(row)
      ? MutateAction.ADD
      : MutateAction.REMOVE;

    let assetObj = this.createAssetObj(connection);
    let mutateObj: MutateRecord = {
      account: this._account.id,
      adgroup: row.id,
      action: action,
      asset: assetObj,
    };

    return mutateObj;
  }

  /** Helper function that creates the appropriate asset object */
  private createAssetObj(connection: AssetConnType) {
    let assetObj: MutateAsset = {
      id: this._activeAsset.id,
      type: <AssetType>this._activeAsset.type,
    };
    switch (this._activeAsset.type) {
      case AssetType.TEXT:
        assetObj.asset_text = (this._activeAsset as TextAsset).asset_text;
        assetObj.text_type_to_assign = connection.toLowerCase();
        break;
      case AssetType.VIDEO:
        assetObj.video_id = (this._activeAsset as VideoAsset).video_id;
        break;
    }
    return assetObj;
  }
}
