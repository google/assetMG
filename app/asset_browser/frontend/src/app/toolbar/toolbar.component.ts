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
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './../model/account';
import { AssetService } from './../services/asset.service';

import { Asset } from './../model/asset';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  accounts$: Observable<Account[]>;
  defaultAccount: number;

  constructor(private dataService: AssetService) {}

  ngOnInit(): void {
    this.accounts$ = this.dataService.getAccountIds().pipe(
      tap((accounts) => {
        if (accounts.length) {
          this.defaultAccount = accounts[0].id;
          this.dataService.changeAccount(accounts[0].id);
        }
      })
    );
  }

  accountChanged(event) {
    // Only get a notification for the selected account not the "unselected" account
    if (event.isUserInput) {
      this.dataService.changeAccount(event.source.value);
    }
  }
}
