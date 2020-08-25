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
import { AccountAGs } from './../model/account';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { ConfigService } from '../services/config.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSetupComponent } from '../app-setup/app-setup.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { AssetDetailsComponent } from '../asset-details/asset-details.component';

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.css'],
})
export class AssetGalleryComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  account: AccountAGs;
  openSideNav: boolean = false;

  @ViewChild('sideNav') sideNav: MatSidenav;
  @ViewChild('assetDetails') assetDetails: AssetDetailsComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _dataService: AssetService,
    private _configService: ConfigService,
    private _setupDialog: MatDialog,
    private _snackBar: MatSnackBar
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
            let subscription = this._dataService.loadMccStruct().subscribe(
              () => {
                this._configService.configValid = true;
                this.dismissSnackBar();
                subscription.unsubscribe();
              },
              (error) => {
                this.dismissSnackBar();
                this.openSnackBarStructFail();
                subscription.unsubscribe();
              }
            );
          }
        });
      }
    });
    this._subscriptions.push(
      this._dataService.accountAGs$.subscribe((account) => {
        this.account = account;
        this.sideNav?.close();
      })
    );
  }

  ngOnDestroy() {
    for (let sub of this._subscriptions) {
      sub.unsubscribe();
    }
  }

  /** Binder functions to enable calling from child */
  get openAssetDetailsFunc() {
    return this.openAssetDetails.bind(this);
  }

  get closeAssetDetailsFunc() {
    return this.closeAssetDetails.bind(this);
  }

  /** Functions that may need to be called from a child component */
  openAssetDetails() {
    this.openSideNav = true;
    if (!this.sideNav.opened) {
      this.assetDetails.loadAdGroups();
      this.sideNav.open();
    }
  }

  closeAssetDetails() {
    this.sideNav.close();
    this._dataService.unselectAsset();
  }

  // uploadAsset() {
  //   // Make sure to unselect any assets to avoid loading the campaign selection
  //   // of any previously selected assets
  //   this.unselectAsset();

  //   const uploadDialogRef = this._uploadDialog.open(UploadAssetsComponent, {
  //     disableClose: true,
  //     data: this.account,
  //   });

  //   uploadDialogRef.afterClosed().subscribe(() => {});
  // }

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

  private openSnackBarStructFail() {
    this._snackBar.open('Failed Loading AssetMG', '', {
      duration: undefined,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  private dismissSnackBar() {
    this._snackBar.dismiss();
  }
}
