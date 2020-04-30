import { Account } from './../model/account';
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

/* The node deifinition that will be used in the tree */
export class EntityNode {
  children: BehaviorSubject<EntityNode[]>;

  constructor(
    private id: number,
    private name: string,
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
  private _selAdGroupIds: number[];

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

  // @Input()
  // set checkedAdGroups(adGroups: number[]) {
  //   this._checkedAdGroups = adGroups;
  // }
  // get checkedAdGroups(): number[] {
  //   return this._checkedAdGroups;
  // }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
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
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  ngOnInit(): void {
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
    let selAdGroups: Array<EntityNode> = [];
    for (let campaign of this.account.campaigns) {
      let expand = false;
      let adGroups = [];
      for (let ag of campaign.adGroups) {
        var adGroupNode = new EntityNode(ag.id, ag.name, []);
        adGroups.push(adGroupNode);
        //if (this.checkedAdGroups.find(ag.id) != -1) {
        if (ag.id == 95186899405) {
          expand = true;
          selAdGroups.push(adGroupNode);
        }
      }
      let campaignNode = new EntityNode(campaign.id, campaign.name, adGroups);
      tree.push(campaignNode);
      if (expand) this.treeControl.expand(campaignNode);

    }
    this.dataSource.data = tree;
    this.checklistSelection.select(...selAdGroups);
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
