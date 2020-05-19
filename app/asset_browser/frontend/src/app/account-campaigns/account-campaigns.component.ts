import { AssetAdGroups, AssetConn } from './../model/asset';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Injectable,
  OnChanges,
} from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import {
  CollectionViewer,
  SelectionChange,
  SelectionModel,
} from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { map } from 'rxjs/operators/map';
import { Account } from './../model/account';
import { AssetService } from './../services/asset.service';

enum nodeType {
  entityNode,
  textPropertyNode,
}
/* The node deifinition that will be used in the tree */
export class TreeNode {
  children: BehaviorSubject<TreeNode[]>;
  type: nodeType;

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
    this.type = type === undefined ? nodeType.entityNode : type;
  }
}

@Component({
  selector: 'app-account-campaigns',
  templateUrl: './account-campaigns.component.html',
  styleUrls: ['./account-campaigns.component.css'],
})
export class AccountCampaignsComponent implements OnChanges {
  private _account: Account;
  private _selAdGroups: AssetAdGroups;
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
    this._showUpdateBtn = false;
    this.dataService.activeAsset$.subscribe((asset) => {
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
      this.buildTreeNodes();
    }
  }
  getLevel = (node: TreeNode): number => {
    return this.levels.get(node) || 0;
  };

  isExpandable = (node: TreeNode): boolean => {
    return (
      node.children.value.length > 0 &&
      (this._isTextAsset || node.children.value[0].type === nodeType.entityNode)
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
            new TreeNode(AssetConn.HEADLINES, 0, [], nodeType.textPropertyNode),
            new TreeNode(AssetConn.DESC, 0, [], nodeType.textPropertyNode),
          ];
          var adGroupNode = new TreeNode(ag.name, ag.id, textNodes);
          adgroups.push(adGroupNode);
        }
        let campaignNode = new TreeNode(
          campaign.campaign_name,
          campaign.id,
          adgroups
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
  nodeSelectionToggle(node: TreeNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants, node)
      : this.checklistSelection.deselect(...descendants, node);
    this.changeDetectorRef.markForCheck();
  }
}
