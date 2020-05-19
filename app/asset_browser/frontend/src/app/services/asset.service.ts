import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
//import {ErrorObservable} from 'rxjs/Observable/ErrorObservable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Asset,
  TextAsset,
  AssetAdGroups,
  AssetConn,
  AssetType,
} from './../model/asset';
import { Account } from './../model/account';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private API_SERVER = 'http://127.0.0.1:5000/';

  /** Gets updated when the account changes */
  private _activeAccountId$ = new BehaviorSubject<number>(null);
  private _activeAccount$ = new BehaviorSubject<Account>(null);
  private _allAssets$ = new BehaviorSubject<Asset[]>(null);
  private _assetsToAdGroups: Asset[] = [];

  /** Gets updated when an asset is selected */
  private _activeAsset$ = new BehaviorSubject<Asset>(null);
  private _activeAssetAdGroups$ = new BehaviorSubject<AssetAdGroups>(null);

  allAssets$ = this._allAssets$.asObservable();
  activeAccount$ = this._activeAccount$.asObservable();
  activeAccountId$ = this._activeAccountId$.asObservable();
  activeAsset$ = this._activeAsset$.asObservable();
  activeAssetAdGroups$ = this._activeAssetAdGroups$.asObservable();

  constructor(private http: HttpClient) {}

  changeAsset(asset: Asset) {
    this._activeAsset$.next(asset);
    this._activeAssetAdGroups$.next(this.getActiveAssetAdGroups(asset.id));
  }

  changeAccount(accountId: number) {
    this._activeAccountId$.next(accountId);
    this.getAllAssets(accountId);
    this.getAccountHierarchy(accountId);
    this._assetsToAdGroups = this.getAssetsToAdGroups();
  }

  private getAllAssets(accountId: number) {
    // Reset the asset observable till the http request is made
    this._allAssets$.next(null);
    // Call the API and update the asset observable
    const endpoint = this.API_SERVER + '/accounts-assets';
    let params = new HttpParams().set('cid', accountId?.toString());
    let subscription = this.http
      .get<Asset[]>(endpoint, { params: params })
      .subscribe((assets) => {
        this._allAssets$.next(assets);
        subscription.unsubscribe();
      });
  }

  getAccountHierarchy(accountId: number) {
    const endpoint = this.API_SERVER + '/structure';
    let params = new HttpParams().set('cid', accountId?.toString());
    console.log(endpoint + '?cid=' + accountId);
    let subscription = this.http
      .get<Account>(endpoint, { params: params })
      .subscribe((account) => {
        this._activeAccount$.next(account);
        console.log(JSON.stringify(account));
        subscription.unsubscribe();
      });
  }

  /** Loads all the asset to adgroups mapping */
  private getAssetsToAdGroups() {
    let jsonReply = [
      {
        id: 2045098263,
        name: null,
        type: 'TEXT',
        text_type: 'headlines',
        asset_text: 'Be a mayor',
        adgroups: [97909190375, 97982663179],
      },
      {
        id: 2045098266,
        name: null,
        type: 'TEXT',
        text_type: 'headlines',
        asset_text: 'Your city in your fingers',
        adgroups: [97909190375],
      },
      {
        id: 2045098260,
        name: null,
        type: 'TEXT',
        text_type: 'descriptions',
        asset_text: 'Your city come alive',
        adgroups: [97909190375],
      },
      {
        id: 2045098257,
        name: null,
        type: 'TEXT',
        text_type: 'descriptions',
        asset_text: 'Build your own city',
        adgroups: [97909190375],
      },
      {
        id: 8170555646,
        name: null,
        type: 'YOUTUBE_VIDEO',
        video_id: 'ukjDKYS8gPM',
        link: 'https://www.youtube.com/watch?v=ukjDKYS8gPM',
        image_url: 'https://img.youtube.com/vi/ukjDKYS8gPM/1.jpg',
        adgroups: [97909190375, 97982663179],
      },
      {
        id: 8761531830,
        name: 'generic html5',
        type: 'MEDIA_BUNDLE',
        adgroups: [97909190375],
      },
      {
        id: 2045098257,
        name: null,
        type: 'TEXT',
        text_type: 'headlines',
        asset_text: 'Build your own city',
        adgroups: [97982663179],
      },
      {
        id: 2045098260,
        name: null,
        type: 'TEXT',
        text_type: 'headlines',
        asset_text: 'Your city come alive',
        adgroups: [97982663179],
      },
      {
        id: 2045098263,
        name: null,
        type: 'TEXT',
        text_type: 'descriptions',
        asset_text: 'Be a mayor',
        adgroups: [97982663179],
      },
      {
        id: 2045098266,
        name: null,
        type: 'TEXT',
        text_type: 'descriptions',
        asset_text: 'Your city in your fingers',
        adgroups: [97982663179],
      },
      {
        id: 8170555649,
        name: null,
        type: 'YOUTUBE_VIDEO',
        video_id: 'MkOlifBjmBI',
        link: 'https://www.youtube.com/watch?v=MkOlifBjmBI',
        image_url: 'https://img.youtube.com/vi/MkOlifBjmBI/1.jpg',
        adgroups: [97982663179],
      },
      {
        id: 8037638620,
        name: null,
        type: 'TEXT',
        text_type: 'headlines',
        asset_text: 'Become a virtual Gardner',
        adgroups: [95186899405, 103529185394],
      },
      {
        id: 8278629807,
        name: null,
        type: 'TEXT',
        text_type: 'headlines',
        asset_text: 'Nine Nine!',
        adgroups: [95186899405, 103529185394],
      },
      {
        id: 8037638623,
        name: null,
        type: 'TEXT',
        text_type: 'descriptions',
        asset_text: 'the best gardening game out there',
        adgroups: [95186899405],
      },
      {
        id: 8048065853,
        name: 'ph.jpg',
        type: 'IMAGE',
        image_url:
          'https://tpc.googlesyndication.com/simgad/14098414386513970705',
        adgroups: [95186899405, 103529185394],
      },
      {
        id: 8752440428,
        name: 'food_pic',
        type: 'IMAGE',
        image_url:
          'https://tpc.googlesyndication.com/simgad/1739479047822347740',
        adgroups: [95186899405, 96689486386],
      },
      {
        id: 8315727242,
        name: 'video1',
        type: 'YOUTUBE_VIDEO',
        video_id: 'ZRCdORJiUgU',
        link: 'https://www.youtube.com/watch?v=ZRCdORJiUgU',
        image_url: 'https://img.youtube.com/vi/ZRCdORJiUgU/1.jpg',
        adgroups: [95186899405],
      },
      {
        id: 8774834020,
        name: null,
        type: 'YOUTUBE_VIDEO',
        video_id: 'nP7JtxdxdwI',
        link: 'https://www.youtube.com/watch?v=nP7JtxdxdwI',
        image_url: 'https://img.youtube.com/vi/nP7JtxdxdwI/1.jpg',
        adgroups: [95186899405, 103529185394],
      },
      {
        id: 8319374654,
        name: 'html5 1',
        type: 'MEDIA_BUNDLE',
        adgroups: [95186899405],
      },
      {
        id: 8048702501,
        name: null,
        type: 'TEXT',
        text_type: 'headlines',
        asset_text: 'second adgroup headline',
        adgroups: [96689486386],
      },
      {
        id: 8048702504,
        name: null,
        type: 'TEXT',
        text_type: 'headlines',
        asset_text: 'second adgroup headline 2',
        adgroups: [96689486386],
      },
      {
        id: 8048702507,
        name: null,
        type: 'TEXT',
        text_type: 'descriptions',
        asset_text: 'second adgroup description',
        adgroups: [96689486386, 103529185394],
      },
      {
        id: 8037638620,
        name: null,
        type: 'TEXT',
        text_type: 'descriptions',
        asset_text: 'Become a virtual Gardner',
        adgroups: [96689486386, 103529185394],
      },
      {
        id: 8749689141,
        name: 'google vid',
        type: 'YOUTUBE_VIDEO',
        video_id: 'QRRnoCHC8vg',
        link: 'https://www.youtube.com/watch?v=QRRnoCHC8vg',
        image_url: 'https://img.youtube.com/vi/QRRnoCHC8vg/1.jpg',
        adgroups: [96689486386],
      },
    ];
    return jsonReply;
  }
  getAccountIds(): Observable<Account[]> {
    const endpoint = this.API_SERVER + '/accounts';
    console.log(endpoint);
    return this.http.get<Account[]>(endpoint);
  }

  getActiveAssetAdGroups(assetId: number) {
    let assetAdGroups: AssetAdGroups = new Map();
    this._assetsToAdGroups.filter(function (asset) {
      if (asset.id == assetId) {
        let assetConnection = AssetConn.ADGROUP;
        if (asset.type == AssetType.TEXT) {
          (<TextAsset>asset).text_type.toUpperCase() ==
          AssetConn.HEADLINES.toUpperCase()
            ? (assetConnection = AssetConn.HEADLINES)
            : (assetConnection = AssetConn.DESC);
        }
        assetAdGroups.set(assetConnection, asset.adgroups);
      }
    });
    return assetAdGroups;
  }
}
