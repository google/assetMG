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
  AssetConn,
  MutateAsset,
  AssetType,
  TextAsset,
  VideoAsset,
} from './../model/asset';
import { Account } from '../model/account';
import { AssetService } from './../services/asset.service';
import { STATUS } from '../model/response';
import {
  TreeNode,
  nodeType,
  AccountCampaignsComponent,
} from '../account-campaigns/account-campaigns.component';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css'],
})
export class AssetDetailsComponent implements OnInit {
  private _account: Account;
  activeAsset: Asset;

  /** Update button params */
  updateInProgress: boolean = false;
  updateMessage: string = '';
  isErrorMessage: boolean = false;

  @Input()
  set account(account: Account) {
    this._account = account;
  }

  get account(): Account {
    return this._account;
  }

  @ViewChild('campaignsTree') campaignsTree: AccountCampaignsComponent;

  constructor(private dataService: AssetService) {}

  ngOnInit(): void {
    this.dataService.activeAsset$.subscribe((asset) => {
      this.activeAsset = asset;
    });

    this.dataService.activeAssetAdGroups$.subscribe((adGroups) => {
      this.updateMessage = '';
      this.isErrorMessage = false;
    });
    this.dataService.updateFinished$.subscribe((response) => {
      this.updateInProgress = false;
      if (response) {
        this.updateMessage = response.msg;
        this.isErrorMessage = response.status_code !== STATUS.SUCCESS;
      }
    });
  }

  updateAsset() {
    let mutateRecords: MutateRecord[] = [];
    for (let campNode of this.campaignsTree.dataSource.data) {
      for (let agNode of campNode.children.value) {
        if (this.campaignsTree.isTextAsset()) {
          for (let node of agNode.children.value) {
            if (node.isEdited) {
              mutateRecords.push(this.createMutateRecord(node));
            }
          }
        } else if (agNode.isEdited) {
          mutateRecords.push(this.createMutateRecord(agNode));
        }
      }
    }

    if (mutateRecords.length) {
      this.updateInProgress = true;
      this.dataService.updateAsset(this.campaignsTree.asset(), mutateRecords);
    }
  }

  /** Creates mutate records for a mutate map */
  private createMutateRecord(node: TreeNode): MutateRecord {
    if (!node.isEdited) return;

    let action = this.campaignsTree.checklistSelection.isSelected(node)
      ? MutateAction.ADD
      : MutateAction.REMOVE;
    let connection =
      node.type === nodeType.textPropertyNode
        ? <AssetConn>node.getName()
        : AssetConn.ADGROUP;
    let assetObj = this.createMutateAssetObj(connection);
    let mutateObj: MutateRecord = {
      account: this._account.id,
      adgroup: node.getId(),
      action: action,
      asset: assetObj,
    };
    return mutateObj;
  }

  /** Helper function that creates the appropriate asset object */
  private createMutateAssetObj(connection: AssetConn) {
    let assetObj: MutateAsset = {
      id: this.campaignsTree.asset().id,
      type: <AssetType>this.campaignsTree.asset().type,
    };
    switch (this.campaignsTree.asset().type) {
      case AssetType.TEXT:
        assetObj.asset_text = (this.campaignsTree.asset() as TextAsset).asset_text;
        assetObj.text_type_to_assign = connection.toLowerCase();
        break;
      case AssetType.VIDEO:
        assetObj.video_id = (this.campaignsTree.asset() as VideoAsset).video_id;
        break;
    }
    return assetObj;
  }
}
