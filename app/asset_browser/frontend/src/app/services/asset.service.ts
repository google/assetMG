import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Asset,
  TextAsset,
  AssetAdGroups,
  AssetConn,
  AssetType,
  MutateRecord,
} from './../model/asset';
import { Account } from './../model/account';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private API_SERVER = 'http://127.0.0.1:5000';

  /** Gets updated when the account changes */
  private _activeAccountId$ = new BehaviorSubject<number>(null);
  private _activeAccount$ = new BehaviorSubject<Account>(null);
  private _allAssets$ = new BehaviorSubject<Asset[]>(null);
  private _assetsToAdGroups: Asset[] = [];

  /** Gets updated when an asset is selected */
  private _activeAsset$ = new BehaviorSubject<Asset>(null);
  private _activeAssetAdGroups$ = new BehaviorSubject<AssetAdGroups>(null);

  /** Gets updated when the update Asset is called */
  private _updateFinished$ = new BehaviorSubject<Asset>(null);

  allAssets$ = this._allAssets$.asObservable();
  activeAccount$ = this._activeAccount$.asObservable();
  activeAccountId$ = this._activeAccountId$.asObservable();
  activeAsset$ = this._activeAsset$.asObservable();
  activeAssetAdGroups$ = this._activeAssetAdGroups$.asObservable();
  updateFinished$ = this._updateFinished$.asObservable();

  constructor(private http: HttpClient) {}

  private getAllAssets(accountId: number) {
    // Reset the asset observable till the http request is made
    this._allAssets$.next(null);
    // Call the API and update the asset observable
    const endpoint = this.API_SERVER + '/accounts-assets/';
    //let params = new HttpParams().set('cid', accountId?.toString());
    let subscription = this.http
      .get<Asset[]>(endpoint, { params: { cid: accountId?.toString() } })
      .subscribe((assets) => {
        this._allAssets$.next(assets);
        subscription.unsubscribe();
      });
  }

  private getAccountHierarchy(accountId: number) {
    const endpoint = this.API_SERVER + '/structure/';
    //let params = new HttpParams().set('cid', accountId?.toString());
    let subscription = this.http
      .get<Account>(endpoint, { params: { cid: accountId?.toString() } })
      .subscribe((account) => {
        this._activeAccount$.next(account);
        subscription.unsubscribe();
      });
  }

  /** Loads all the asset to adgroups mapping */
  private getAssetsToAdGroups() {
    const endpoint = this.API_SERVER + '/assets-to-ag/';
    let subscritpion = this.http.get<Asset[]>(endpoint).subscribe((assets) => {
      this._assetsToAdGroups = assets;
      subscritpion.unsubscribe();
    });
  }

  getAccountIds(): Observable<Account[]> {
    const endpoint = this.API_SERVER + '/accounts/';
    return this.http.get<Account[]>(endpoint);
  }

  changeAsset(asset: Asset) {
    this._activeAsset$.next(asset);
    if (asset) {
      this._activeAssetAdGroups$.next(this.getActiveAssetAdGroups(asset.id));
    }
  }

  changeAccount(accountId: number) {
    this._activeAccountId$.next(accountId);
    this.getAllAssets(accountId);
    this.getAccountHierarchy(accountId);
    this.getAssetsToAdGroups();
    this.changeAsset(null);
  }

  getActiveAssetAdGroups(assetId: number) {
    let assetAdGroups: AssetAdGroups = new Map();
    this._assetsToAdGroups.filter(function (asset) {
      if (asset.id == assetId) {
        let assetConnection = AssetConn.ADGROUP;
        if (asset.type == AssetType.TEXT) {
          (asset as TextAsset).text_type.toLowerCase() ==
          AssetConn.HEADLINES.toLowerCase()
            ? (assetConnection = AssetConn.HEADLINES)
            : (assetConnection = AssetConn.DESC);
        }
        assetAdGroups.set(assetConnection, asset.adgroups);
      }
    });
    return assetAdGroups;
  }

  updateAsset(changedAsset: Asset, updateArray: MutateRecord[]) {
    const endpoint = this.API_SERVER + '/mutate-ad/';
    console.log('FE Updates: ', updateArray);
    let subscritpion = this.http.post(endpoint, updateArray).subscribe(
      (updatedAssets) => {
        console.log('Returned Updates:', updatedAssets);
        console.log('Before: ', this._assetsToAdGroups);
        // updated the asset to adgroup cache
        for (let update of <any[]>updatedAssets) {
          if (!update.id) {
            this._assetsToAdGroups.push(update.asset);
          } else {
            this._assetsToAdGroups[update.id] = update.asset;
          }
        }
        this._updateFinished$.next(changedAsset);
        subscritpion.unsubscribe();
      },
      (error) => {
        console.log('Error: ', error);
        this._updateFinished$.next(changedAsset);
        subscritpion.unsubscribe();
      }
    );
  }
}
