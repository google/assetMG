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

const HEADLINE_PREFIX = 'H-';
const DESC_PREFIX = 'D-';

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
  private _mutateAdd: MutateMap = new Map();
  private _mutateRemove: MutateMap = new Map();
  private _isTextAsset: boolean; /** When this is set, additional nodes appear under adgroups */
  private _showUpdateBtn: boolean; /** This is only true when an asset is selected */
  levels = new Map<TreeNode, number>();
  treeControl: FlatTreeControl<TreeNode>;
  treeFlattener: MatTreeFlattener<TreeNode, TreeNode>;
  dataSource: MatTreeFlatDataSource<TreeNode, TreeNode>;
  checklistSelection = new SelectionModel<TreeNode>(true, [], true);
  @Input()
  set account(account: Account) {
    this._account = account;
  }
  get account(): Account {
    return this._account;
  }

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
      this._selAdGroups = adGroups;
      this.updateSelectedNodes();
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
  nodeSelectionToggle(node: TreeNode, checked: boolean): void {
    this.trackChanges(node, checked);
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants, node)
      : this.checklistSelection.deselect(...descendants, node);
    this.changeDetectorRef.markForCheck();
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
    // This is a child node - so track changes on this level
    let connection = AssetConn.ADGROUP;
    if (node.type == nodeType.textPropertyNode) {
      connection = <AssetConn>node.getName();
    }
    if (!this.checklistSelection.isSelected(node)) {
      this.updateMutateMap(MutateAction.ADD, node.getId(), connection);
    } else {
      this.updateMutateMap(MutateAction.REMOVE, node.getId(), connection);
    }
  }

  private updateMutateMap(
    action: MutateAction,
    adgroupId: number,
    connection: AssetConn
  ): void {
    // Add a prefix to mark Headlines and Descriptions in Text assets adgroups
    let agId = adgroupId.toString();
    if (connection == AssetConn.HEADLINES) agId = HEADLINE_PREFIX + agId;
    else if (connection == AssetConn.DESC) agId = DESC_PREFIX + agId;

    // Update the map as needed - if it was already added to a map it needs
    // to be deleted (double toggle) or it should be added for changes to take effect
    if (action == MutateAction.ADD) {
      this._mutateRemove.has(agId)
        ? this._mutateRemove.delete(agId)
        : this._mutateAdd.set(agId, connection);
    } else {
      this._mutateAdd.has(agId)
        ? this._mutateAdd.delete(agId)
        : this._mutateRemove.set(agId, connection);
    }
  }

  /** Triggered upon clicking the update button */
  updateAsset() {
    let mutateRecords: MutateRecord[] = [];
    console.log('Add: ');
    mutateRecords.push(
      ...this.createMutateRecords(this._mutateAdd, MutateAction.ADD)
    );

    console.log('Remove: ');
    mutateRecords.push(
      ...this.createMutateRecords(this._mutateRemove, MutateAction.REMOVE)
    );

    console.log('******');
    //console.log(JSON.stringify(mutateRecords));
    this.dataService.updateAsset(this._asset, mutateRecords);
    // When update succeeds, clear the maps
    this._mutateAdd.clear();
    this._mutateRemove.clear();
  }

  /** Creates mutate records for a mutate map */
  createMutateRecords(map: MutateMap, action: MutateAction): MutateRecord[] {
    let mutateRecords = [];
    map.forEach((connection: AssetConn, agId: string) => {
      let adgroupId = this.removePrefix(agId);
      let assetObj = this.createMutateAssetObj(connection);
      let mutateObj: MutateRecord = {
        account: this._account.id,
        adgroup: adgroupId,
        action: action,
        asset: assetObj,
      };
      mutateRecords.push(mutateObj);
      console.log(agId, connection);
    });
    return mutateRecords;
  }

  /** Removes the prefix from the adgroup id and returns an int */
  removePrefix(adGroupStr: string) {
    adGroupStr = adGroupStr.replace(HEADLINE_PREFIX, '');
    adGroupStr = adGroupStr.replace(DESC_PREFIX, '');
    return Number(adGroupStr);
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
