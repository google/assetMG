import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
// import { MatSelectChange } from '@angular/material/select';
// import { MatOption } from '@angular/material/core';

import { Account } from './../model/account';
import { AssetService } from './../services/asset.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  accounts$: Observable<Account[]>;

  constructor(private dataService: AssetService) {}

  ngOnInit(): void {
    this.accounts$ = this.dataService.getAccountIds();
  }

  accountChanged(event) {
    // Only get a notification for the selected account not the "unselected" account
    if (event.isUserInput) {
      this.dataService.changeAccount(event.source.value);
    }
  }
}
