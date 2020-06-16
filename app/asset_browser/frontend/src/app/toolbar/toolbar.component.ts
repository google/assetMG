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
import { Observable } from 'rxjs';
import { Account } from './../model/account';
import { AssetService } from './../services/asset.service';

import { Asset } from './../model/asset';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  accounts$: Observable<Account[]>;
  defaultAccount: number;

  @Input() loadAccounts: boolean = false;

  constructor(
    private _dataService: AssetService,
    private _settingsDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.accounts$ = this._dataService.getAccountIds().pipe(
      tap((accounts) => {
        if (accounts.length) {
          this.defaultAccount = accounts[0].id;
          this._dataService.changeAccount(accounts[0].id);
        }
      })
    );
  }

  accountChanged(event) {
    // Only get a notification for the selected account not the "unselected" account
    if (event.isUserInput) {
      this._dataService.changeAccount(event.source.value);
    }
  }
  openSettings() {
    const dialogRef = this._settingsDialog.open(SettingsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /** TODO: add a proper email here */
  feedbackClicked() {
    let mailText = 'mailto:abc@abc.com+?subject=AssetMG%Feedback';
    window.location.href = mailText;
  }
}
