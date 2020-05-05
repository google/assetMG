import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Injectable,
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

/* The node deifinition that will be used in the tree */
export class EntityNode {
  children: BehaviorSubject<EntityNode[]>;

  getId(): number {
    return this._id;
  }

  getName(): string {
    return this._name;
  }
  constructor(
    private _id: number,
    private _name: string,
    children?: EntityNode[]
  ) {
    this.children = new BehaviorSubject(children === undefined ? [] : children);
  }
}

@Component({
  selector: 'app-account-campaigns',
  templateUrl: './account-campaigns.component.html',
  styleUrls: ['./account-campaigns.component.css'],
})
export class AccountCampaignsComponent {
  private _account: Account;
  private _assetAdGroupIds: number[];

  levels = new Map<EntityNode, number>();
  treeControl: FlatTreeControl<EntityNode>;
  treeFlattener: MatTreeFlattener<EntityNode, EntityNode>;
  dataSource: MatTreeFlatDataSource<EntityNode, EntityNode>;
  checklistSelection = new SelectionModel<EntityNode>(true, [], true);

  @Input()
  set account(account: Account) {
    this._account = account;
  }
  get account(): Account {
    return this._account;
  }

  set assetAdGroups(adGroupIds: number[]) {
    this._assetAdGroupIds = adGroupIds;
  }
  get assetAdGroups(): number[] {
    return this._assetAdGroupIds;
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
    this.treeControl = new FlatTreeControl<EntityNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  ngOnInit(): void {
    this.dataService.activeAsset.subscribe((asset) => {
      this.assetAdGroups = this.dataService.getAssetAdGroups(asset?.id);
      this.updateSelectedNodes();
    });
    this.buildTreeNodes();
  }

  getLevel = (node: EntityNode): number => {
    return this.levels.get(node) || 0;
  };

  isExpandable = (node: EntityNode): boolean => {
    return node.children.value.length > 0;
  };

  getChildren = (node: EntityNode) => {
    return node.children;
  };

  transformer = (node: EntityNode, level: number) => {
    this.levels.set(node, level);
    return node;
  };

  hasChildren = (index: number, node: EntityNode) => {
    return this.isExpandable(node);
  };

  /** Constructs a tree structure based on account hierarchy */
  private buildTreeNodes() {
    const tree = [];
    for (let campaign of this.account.campaigns) {
      let expand = false;
      let adGroups = [];
      for (let ag of campaign.adGroups) {
        var adGroupNode = new EntityNode(ag.id, ag.name, []);
        adGroups.push(adGroupNode);
      }
      let campaignNode = new EntityNode(campaign.id, campaign.name, adGroups);
      tree.push(campaignNode);
    }
    this.dataSource.data = tree;
    this.updateSelectedNodes();
  }

  updateSelectedNodes() {
    let selAdGroups: Array<EntityNode> = [];
    let unSelAdGroups: Array<EntityNode> = [];

    for (let campNode of this.dataSource.data) {
      let expand = false;
      for (let agNode of campNode.children.value) {
        if (this.assetAdGroups){
          if (this.assetAdGroups.indexOf(agNode.getId(), 0) != -1) {
          expand = true;
          selAdGroups.push(agNode);
        } else {
          unSelAdGroups.push(agNode);
        }
        expand
          ? this.treeControl.expand(campNode)
          : this.treeControl.collapse(campNode);
        }
      }
    }
    this.checklistSelection.select(...selAdGroups);
    this.checklistSelection.deselect(...unSelAdGroups);
  }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: EntityNode): boolean {
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
  descendantsPartiallySelected(node: EntityNode): boolean {
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
  nodeSelectionToggle(node: EntityNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants, node)
      : this.checklistSelection.deselect(...descendants, node);
    this.changeDetectorRef.markForCheck();
  }
}
