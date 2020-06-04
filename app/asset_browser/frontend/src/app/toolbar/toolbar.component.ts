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
