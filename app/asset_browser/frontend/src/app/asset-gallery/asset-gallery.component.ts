import { AssetService } from './../services/asset.service';
import { Account } from './../model/account';
import { Asset, TextAsset, AssetType } from './../model/asset';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

const ASSET_TYPES = [
  {
    label: 'All Assets',
    value: AssetType.ALL,
  },
  {
    label: 'Image',
    value: AssetType.IMG,
  },
  {
    label: 'Text',
    value: AssetType.TEXT,
  },
  {
    label: 'Video',
    value: AssetType.VIDEO,
  },
  {
    label: 'HTML',
    value: AssetType.HTML,
  },
];

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.css'],
})
export class AssetGalleryComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  account: Account;
  assets: Asset[];
  filteredAssets: Asset[];
  activeAssetId: number;
  openSideNav: boolean = false;

  filterOptions = ASSET_TYPES;
  filterStr: string = '';
  filterType: AssetType = AssetType.ALL;

  @ViewChild('sideNav') sideNav: MatSidenav;

  constructor(private dataService: AssetService) {}

  ngOnInit(): void {
    this._subscriptions.push(
      this.dataService.activeAccount$.subscribe((account) => {
        this.account = account;
        this.sideNav?.close();
      })
    );

    this._subscriptions.push(
      this.dataService.allAssets$.subscribe((assets) => {
        this.assets = assets;
        this.filteredAssets = assets;
      })
    );
  }

  ngOnDestroy() {
    for (let sub of this._subscriptions) {
      sub.unsubscribe();
    }
  }

  selectAsset(id) {
    this.activeAssetId = id;
    this.openSideNav = true;
    if (!this.sideNav.opened) {
      this.sideNav.open();
    }
  }

  /** Close side nav when escape is pressed */
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.sideNav.close();
  }

  filterByStr(searchStr) {
    this.filterStr = searchStr;
    this.filteredAssets = this.applyFilter();
  }

  filterByType(filterAssetType) {
    this.filterType = <AssetType>filterAssetType;
    this.filteredAssets = this.applyFilter();
  }

  /** Resturns assets with the search string their name or
   * in their text (for text assets) */
  private applyFilter(): Asset[] {
    // Nothing to filter - return full set of assets
    if (!this.filterStr.length && this.filterType == AssetType.ALL) {
      return this.assets;
    }

    // Filter by name and/or type
    let searchStr = this.filterStr.toLocaleLowerCase();
    return this.assets.filter(
      (asset: Asset) =>
        // Filter assets by string
        (!searchStr.length ||
          asset.name.toLocaleLowerCase().indexOf(searchStr) != -1 ||
          (asset.type === AssetType.TEXT &&
            (asset as TextAsset).asset_text
              .toLocaleLowerCase()
              .indexOf(searchStr) != -1)) &&
        // filter assets by type
        (this.filterType === AssetType.ALL || asset.type === this.filterType)
    );
  }
}
