import { AssetService } from './../services/asset.service';
import { Account } from './../model/account';
import { Asset } from './../model/asset';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.css'],
})
export class AssetGalleryComponent implements OnInit {
  account: Account;
  assets: Asset[];

  constructor(private dataService: AssetService) {}

  ngOnInit(): void {
    /** Todo: This should listen to changes in the account id */
    this.account = this.dataService.getAccountHierarchy();
    this.assets = <Asset[]>this.dataService.getAllAssets(this.account.id);
  }
}
