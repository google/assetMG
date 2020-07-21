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
import { AssetService } from './../services/asset.service';
import { Account } from './../model/account';
import { Asset, TextAsset, AssetType } from './../model/asset';
import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { ConfigService } from '../services/config.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSetupComponent } from '../app-setup/app-setup.component';
import { UploadAssetsComponent } from '../upload-assets/upload-assets.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private _dataService: AssetService,
    private _configService: ConfigService,
    private _setupDialog: MatDialog,
    private _uploadDialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _cd: ChangeDetectorRef
  ) {}

  getConfigService(): ConfigService {
    return this._configService;
  }

  ngOnInit(): void {
    this._configService.loadConfigSettings();

    this._configService.configLoaded$.subscribe((loaded) => {
      let config = this._configService.getConfigSettings();
      if (!loaded && config) {
        const configDialogRef = this._setupDialog.open(AppSetupComponent, {
          disableClose: true,
          data: config,
        });

        configDialogRef.afterClosed().subscribe((success) => {
          if (success) {
            this.openSnackBar();
            let subscription = this._dataService
              .loadMccStruct()
              .subscribe(() => {
                this._configService.configValid = true;
                this.dismissSnackBar();
                subscription.unsubscribe();
              });
          }
        });
      }
    });
    this._subscriptions.push(
      this._dataService.activeAccount$.subscribe((account) => {
        this.account = account;
        this.sideNav?.close();
      })
    );

    this._subscriptions.push(
      this._dataService.allAssets$.subscribe((assets) => {
        this.assets = assets;
        this.filteredAssets = assets;
        console.log('Change!');
        // this._cd.markForCheck();
        // console.log('Marked');
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

  uploadAsset() {
    // Make sure to unselect any assets to avoid loading the campaign selection
    // of any previously selected assets
    this.unselectAsset();

    const uploadDialogRef = this._uploadDialog.open(UploadAssetsComponent, {
      disableClose: true,
      data: this.account,
    });

    uploadDialogRef.afterClosed().subscribe(() => {});
  }
  /** Close side nav when escape is pressed */
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.unselectAsset();
  }

  unselectAsset() {
    this.sideNav.close();
    this.activeAssetId = null;
    this._dataService.unselectAsset();
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

  private openSnackBar() {
    this._snackBar.open(
      'Loading AssetMG. This may take a few mintues... ',
      '',
      {
        duration: undefined,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      }
    );
  }

  private dismissSnackBar() {
    this._snackBar.dismiss();
  }
}
