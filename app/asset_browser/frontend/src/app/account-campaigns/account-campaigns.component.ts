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
import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Account } from './../model/account';
import {
  AssetAdGroups,
  AssetConn,
  Asset,
  MutateAction,
  MutateRecord,
  AssetType,
  MutateAsset,
  TextAsset,
  VideoAsset,
} from './../model/asset';
import { AssetService } from './../services/asset.service';
import { STATUS } from '../model/response';

const MAX_HEADLINES_LEN = 30;
enum nodeType {
  campNode,
  agNode,
  textPropertyNode,
}

type MutateMap = Map<string, AssetConn>;

/* The node deifinition that will be used in the tree */
export class TreeNode {
  children: BehaviorSubject<TreeNode[]>;
  type: nodeType;
  isEdited: boolean;
  disabled: boolean;

  getId(): number {
    return this._id;
  }
  getName(): string {
    return this._name;
  }
  constructor(
    private _name: string,
    private _id?: number,
    children?: TreeNode[],
    type?: nodeType
  ) {
    this.children = new BehaviorSubject(children === undefined ? [] : children);
    this.type = type === undefined ? nodeType.campNode : type;
    this.isEdited = false;
    this.disabled = false;
  }
}

@Component({
  selector: 'app-account-campaigns',
  templateUrl: './account-campaigns.component.html',
  styleUrls: ['./account-campaigns.component.css'],
})
export class AccountCampaignsComponent implements OnChanges {
  private _account: Account;
  private _asset: Asset;
  private _selAdGroups: AssetAdGroups;
  private _isTextAsset: boolean; /** When this is set, additional nodes appear under adgroups */
  private _showUpdateBtn: boolean; /** This is only true when an asset is selected */
  levels = new Map<TreeNode, number>();
  treeControl: FlatTreeControl<TreeNode>;
  treeFlattener: MatTreeFlattener<TreeNode, TreeNode>;
  dataSource: MatTreeFlatDataSource<TreeNode, TreeNode>;
  checklistSelection = new SelectionModel<TreeNode>(true, [], true);

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

  @Input() buttonLabel: string;

  get showUpdateBtn(): boolean {
    return this._showUpdateBtn;
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: AssetService
  ) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<TreeNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
    this._isTextAsset = true;
    this.dataSource.data = [];
  }

  ngOnInit(): void {
    this._asset = null;
    this._showUpdateBtn = false;
    this.dataService.activeAsset$.subscribe((asset) => {
      this._asset = asset;
      if (asset) {
        asset.type == 'TEXT'
          ? (this._isTextAsset = true)
          : (this._isTextAsset = false);
        this._showUpdateBtn = true;
      } else {
        this._showUpdateBtn = false;
      }
    });
    this.dataService.activeAssetAdGroups$.subscribe((adGroups) => {
      // Refresh the selected AdGroups
      this.updateMessage = '';
      this.isErrorMessage = false;
      this._selAdGroups = adGroups;
      this.updateSelectedNodes();
    });
    this.dataService.updateFinished$.subscribe((response) => {
      this.updateInProgress = false;
      if (response) {
        this.updateMessage = response.msg;
        this.isErrorMessage = response.status_code !== STATUS.SUCCESS;
        // Clear previous edit icons from nodes
        let editedNodes = this.treeControl.dataNodes.filter(
          (node) => node.isEdited === true
        );
        editedNodes.forEach((node) => {
          node.isEdited = false;
          if (
            response.status_code !== STATUS.SUCCESS &&
            response.status_code !== STATUS.PARTIAL_SUCCESS
          ) {
            this.nodeSelectionToggle(node);
          }
        });
      }
    });
  }

  /** Is called when the accountId changes in the parent component */
  ngOnChanges() {
    if (this.account) {
      this._showUpdateBtn = false;
      this._isTextAsset = true;
      this.buildTreeNodes();
    }
  }

  getLevel = (node: TreeNode): number => {
    return this.levels.get(node) || 0;
  };

  isExpandable = (node: TreeNode): boolean => {
    return (
      node.children.value.length > 0 &&
      (this._isTextAsset ||
        node.children.value[0].type !== nodeType.textPropertyNode)
    );
  };

  getChildren = (node: TreeNode) => {
    return node.children;
  };

  transformer = (node: TreeNode, level: number) => {
    this.levels.set(node, level);
    return node;
  };

  hasChildren = (index: number, node: TreeNode) => {
    return this.isExpandable(node);
  };

  /** Constructs a tree structure based on account hierarchy */
  private buildTreeNodes() {
    const tree = [];
    if (this.account) {
      for (let campaign of this.account.campaigns) {
        let adgroups = [];
        for (let ag of campaign.adgroups) {
          let textNodes = [
            new TreeNode(
              AssetConn.HEADLINES,
              ag.id,
              [],
              nodeType.textPropertyNode
            ),
            new TreeNode(AssetConn.DESC, ag.id, [], nodeType.textPropertyNode),
          ];
          var adGroupNode = new TreeNode(
            ag.name,
            ag.id,
            textNodes,
            nodeType.agNode
          );
          adgroups.push(adGroupNode);
        }
        let campaignNode = new TreeNode(
          campaign.campaign_name,
          campaign.id,
          adgroups,
          nodeType.campNode
        );
        tree.push(campaignNode);
      }
    }
    this.dataSource.data = tree;
    this.checklistSelection.clear();
    //this.changeDetectorRef.markForCheck();
  }

  updateSelectedNodes() {
    this.treeControl.collapseAll();
    let selAdGroups: Array<TreeNode> = [];
    let unSelAdGroups: Array<TreeNode> = [];
    if (this._selAdGroups) {
      for (let campNode of this.dataSource.data) {
        let expandCampaign = false;
        for (let agNode of campNode.children.value) {
          // Disable headlines node if the text is too long
          if (this._isTextAsset) {
            let hNode = agNode.children.value.find(
              (node) => node.getName() == AssetConn.HEADLINES
            );
            (<TextAsset>this._asset).asset_text.length > MAX_HEADLINES_LEN
              ? (hNode.disabled = true)
              : (hNode.disabled = false);
          }

          // Update selection
          let hasHeadlineConn,
            hasDescConn,
            hasAdGroupConn = false;
          if (this._isTextAsset) {
            hasHeadlineConn = this.hasAdGroupConnection(
              AssetConn.HEADLINES,
              agNode.getId()
            );
            hasDescConn = this.hasAdGroupConnection(
              AssetConn.DESC,
              agNode.getId()
            );
          } else {
            hasAdGroupConn = this.hasAdGroupConnection(
              AssetConn.ADGROUP,
              agNode.getId()
            );
          }
          // Need to check if the adGroup node will be select (Non-Text Assets)
          // Or one of its children: Headlines or text
          if (!this._isTextAsset && hasAdGroupConn) {
            expandCampaign = true;
            selAdGroups.push(agNode);
            for (let node of agNode.children.value) {
              selAdGroups.push(node);
            }
          } else if (this._isTextAsset && (hasHeadlineConn || hasDescConn)) {
            expandCampaign = true;
            this.treeControl.expand(agNode);
            if (hasHeadlineConn) {
              selAdGroups.push(
                agNode.children.value.find(
                  (node) => node.getName() == AssetConn.HEADLINES
                )
              );
            }
            if (hasDescConn) {
              selAdGroups.push(
                agNode.children.value.find(
                  (node) => node.getName() == AssetConn.DESC
                )
              );
            }
          } else {
            // Unselect the adGroup and it's children (Text properties)
            unSelAdGroups.push(agNode);
            for (let node of agNode.children.value) {
              unSelAdGroups.push(node);
            }
          }
          expandCampaign
            ? this.treeControl.expand(campNode)
            : this.treeControl.collapse(campNode);
        }
      }
    }
    this.checklistSelection.clear();
    this.checklistSelection.select(...selAdGroups);
    this.checklistSelection.deselect(...unSelAdGroups);
    this.changeDetectorRef.markForCheck();
  }

  /** Helper function to look for adGroup in adGroupMapping */
  hasAdGroupConnection(connection: AssetConn, adGroupId: number) {
    let adGroups = this._selAdGroups.get(connection);
    if (adGroups !== undefined && adGroups.find((id) => id == adGroupId)) {
      return true;
    }
    return false;
  }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: TreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    if (!descendants.length) {
      return this.checklistSelection.isSelected(node);
    }
    const selected = this.checklistSelection.isSelected(node);
    const allSelected = descendants.every((child) =>
      this.checklistSelection.isSelected(child)
    );
    if (!selected && allSelected) {
      this.checklistSelection.select(node);
      this.changeDetectorRef.markForCheck();
    } else {
      const noneSelected = descendants.every(
        (child) => !this.checklistSelection.isSelected(child)
      );
      if (selected && noneSelected) {
        this.checklistSelection.deselect(node);
        this.changeDetectorRef.markForCheck();
      }
    }
    return allSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    if (!descendants.length) {
      return false;
    }
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the entity selection. Select/deselect all the descendants node */
  nodeSelectionToggle(node: TreeNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants, node)
      : this.checklistSelection.deselect(...descendants, node);
    this.changeDetectorRef.markForCheck();
  }

  /** Track changes made then select/deselect all the descendants node */
  nodeClicked(node: TreeNode, checked: boolean): void {
    this.trackChanges(node, checked);
    this.nodeSelectionToggle(node);
  }

  /** Update the mutate map to keep track of user's changes */
  trackChanges(node: TreeNode, checked: boolean): void {
    // If this is a campaign node (or adGroup for text asset) then we need to
    // tranverse its child nodes
    if (
      node.type === nodeType.campNode ||
      (node.type === nodeType.agNode && this._isTextAsset)
    ) {
      for (let childNode of node.children.value) {
        this.trackChanges(childNode, checked);
      }
      return;
    }

    // When traversing the tree - compare the old state to the new state
    // and skip if they are the same
    if (checked === this.checklistSelection.isSelected(node)) return;

    // Update the edit icon as needed
    node.isEdited = !node.isEdited;
  }

  updateAsset() {
    let mutateRecords: MutateRecord[] = [];
    for (let campNode of this.dataSource.data) {
      for (let agNode of campNode.children.value) {
        if (this._isTextAsset) {
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
    console.log('******');
    if (mutateRecords.length) {
      this.updateInProgress = true;
      this.dataService.updateAsset(this._asset, mutateRecords);
    }
  }

  /** Creates mutate records for a mutate map */
  createMutateRecord(node: TreeNode): MutateRecord {
    if (!node.isEdited) return;

    let action = this.checklistSelection.isSelected(node)
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
    console.log(action, node.getId(), connection);
    return mutateObj;
  }

  /** Helper function that creates the appropriate asset object */
  createMutateAssetObj(connection: AssetConn) {
    let assetObj: MutateAsset = {
      id: this._asset.id,
      type: <AssetType>this._asset.type,
    };
    switch (this._asset.type) {
      case AssetType.TEXT:
        assetObj.asset_text = (this._asset as TextAsset).asset_text;
        assetObj.text_type_to_assign = connection.toLowerCase();
        break;
      case AssetType.VIDEO:
        assetObj.video_id = (this._asset as VideoAsset).video_id;
        break;
    }
    return assetObj;
  }
}
