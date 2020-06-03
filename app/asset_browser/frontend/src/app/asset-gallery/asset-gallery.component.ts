import { AssetService } from './../services/asset.service';
import { Account } from './../model/account';
import { Asset, TextAsset, AssetType } from './../model/asset';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.css'],
})
export class AssetGalleryComponent implements OnInit {
  private _assetsSubscription: Subscription;

  account$: Observable<Account>;
  assets: Asset[];
  filteredAssets: Asset[];
  activeAssetId: number;

  filterStr: string = '';
  filterType: AssetType = AssetType.ALL;

  constructor(private dataService: AssetService) {}

  ngOnInit(): void {
    this.account$ = this.dataService.activeAccount$;
    this._assetsSubscription = this.dataService.allAssets$.subscribe(
      (assets) => {
        this.assets = assets;
        this.filteredAssets = assets;
      }
    );
  }

  ngOnDestroy() {
    this._assetsSubscription.unsubscribe();
  }

  selectAsset(id) {
    this.activeAssetId = id;
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
