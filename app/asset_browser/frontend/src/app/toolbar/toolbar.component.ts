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
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Account } from './../model/account';
import { AssetService } from './../services/asset.service';
import { AuthorizationService } from './../services/authorization.service';

import { Asset } from './../model/asset';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';
import { ConfigService } from '../services/config.service';
import { ReloadAppService } from '../services/reload-app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  private _subscriptions: Subscription[] = [];
  accounts$: Observable<Account[]>;
  defaultAccount: number;
  loggedIn: boolean=false;

  @Input() loadAccounts: boolean = false;

  constructor(
    private _dataService: AssetService,
    private _configService: ConfigService,
    private _authorizationService: AuthorizationService,
    private _reloadAppService: ReloadAppService,
    private _settingsDialog: MatDialog
  ) {
    this._reloadAppService.reloadAccountIds.subscribe(() => {
      this.loadAccountIds();
    });
  }

  ngOnInit(): void {
    this.loadAccountIds();

    this._subscriptions.push(
      this._authorizationService.loggedIn$.subscribe((loggedIn) => {
        this.loggedIn = loggedIn;
      })
    );
  }

  loadAccountIds(): void {
    this.accounts$ = this._dataService.getAccountIds().pipe(
      tap((accounts) => {
        if (accounts.length) {
          this.defaultAccount = accounts[0].id;
          this._dataService.changeAccount(accounts[0].id);
        }
      })
    );
  }

  refreshCache() {
    // Manually force a cache refresh based on user trigger
    console.log("Refreshing cache manually.");
    this._reloadAppService.reloadMcc.next(true);
  }

  accountChanged(event) {
    // Only get a notification for the selected account not the "unselected" account
    if (event.isUserInput) {
      this._dataService.changeAccount(event.source.value);
    }
  }

  openSettings() {
    let config = this._configService.getConfigSettings();
    let ytConfig = this._configService.getYtConfigSettings();
    this._settingsDialog.open(SettingsComponent, {
      data: {
        config:{
        client_customer_id: config.client_customer_id,
        client_id: config.client_id,
        client_secret: config.client_secret,
        developer_token: config.developer_token,
        refresh_token: config.refresh_token,
        config_valid: config.config_valid
        },
        yt:{
        channel_id: ytConfig.channel_id
        }
      }
    });
  }

  feedbackClicked() {
    let mailText = 'mailto:assetmg@google.com+?subject=AssetMG%Feedback';
    window.location.href = mailText;
  }
}
