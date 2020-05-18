import { AssetService } from './../services/asset.service';
import { Account } from './../model/account';
import { Asset } from './../model/asset';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.css'],
})
export class AssetGalleryComponent implements OnInit {
  account: Account;
  assets$: Observable<Asset[]>;

  constructor(private dataService: AssetService) {}

  ngOnInit(): void {
    this.dataService.activeAccountId.subscribe((accountId) => {
      if (accountId) {
        this.account = this.dataService.getAccountHierarchy(accountId);
        this.assets$ = this.dataService.getAllAssets(accountId);
      }
    });
  }
}
