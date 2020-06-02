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
  selectedAsset: number;

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
    this.selectedAsset = id;
  }

  searchAssets(searchStr) {
    this.filteredAssets = searchStr
      ? this.performFilter(searchStr)
      : this.assets;
  }

  /** Resturns assets with the search string their name or
   * in their text (for text assets) */
  performFilter(filterBy: string): Asset[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.assets.filter(
      (asset: Asset) =>
        asset.name.toLocaleLowerCase().indexOf(filterBy) != -1 ||
        (asset.type === AssetType.TEXT &&
          (asset as TextAsset).asset_text
            .toLocaleLowerCase()
            .indexOf(filterBy) != -1)
    );
  }
}
