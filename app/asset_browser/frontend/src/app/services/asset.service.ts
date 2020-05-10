import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Asset,
  TextAsset,
  AssetAdGroups,
  AssetConn,
  AssetType,
} from './../model/asset';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  /** Gets updated when the account changes */
  /** Todo: */ private _accountStructure;
  private _allAssetsSource = new BehaviorSubject<Asset[]>(null);
  private _allAssetsAdGroups: Asset[] = [];

  /** Gets updated when an asset is selected */
  private _activeAssetSource = new BehaviorSubject<Asset>(null);
  private _activeAssetAdGroupsSource = new BehaviorSubject<AssetAdGroups>(null);

  activeAsset = this._activeAssetSource.asObservable();
  activeAssetAdGroups = this._activeAssetAdGroupsSource.asObservable();
  allAssets = this._allAssetsSource.asObservable();

  constructor() {
    /** Todo: Needs to be removed from here */
    this.changeAccount(7935681790);
  }

  changeAsset(asset: Asset) {
    this._activeAssetSource.next(asset);
    this._activeAssetAdGroupsSource.next(this.getActiveAssetAdGroups(asset.id));
  }

  changeAccount(accountId: number) {
    this._allAssetsSource.next(this.getAllAssets(accountId));
    this._allAssetsAdGroups = this.getAssetsToAdGroups();
  }

  /** Todo: This should return the json in all-assets-per-account */
  getAllAssets(accountId: number) {
    let jsonReply = {
      name: 'Account1',
      id: 7935681790,
      assets: [
        {
          id: 8037638617,
          name: '',
          type: 'TEXT',
          asset_text: 'Loads of fun!',
        },
        {
          id: 8037638620,
          name: '',
          type: 'TEXT',
          asset_text: 'Become a virtual Gardner',
        },
        {
          id: 8037638623,
          name: '',
          type: 'TEXT',
          asset_text: 'the best gardening game out there',
        },
        {
          id: 8048065853,
          name: 'ph.jpg',
          type: 'IMAGE',
          image_url:
            'https://tpc.googlesyndication.com/simgad/14098414386513970705',
          file_size: 7721,
          image_height: 250,
          image_width: 250,
        },
        {
          id: 8048702501,
          name: '',
          type: 'TEXT',
          asset_text: 'second adgroup headline',
        },
        {
          id: 8048702504,
          name: '',
          type: 'TEXT',
          asset_text: 'second adgroup headline 2',
        },
        {
          id: 8048702507,
          name: '',
          type: 'TEXT',
          asset_text: 'second adgroup description',
        },
        {
          id: 8165465601,
          name: '',
          type: 'IMAGE',
          image_url:
            'https://tpc.googlesyndication.com/simgad/5808115934604257918',
          file_size: 26750,
          image_height: 512,
          image_width: 384,
        },
        {
          id: 8251506199,
          name: 'square.png',
          type: 'IMAGE',
          image_url:
            'https://tpc.googlesyndication.com/simgad/15907806694484045218',
          file_size: 44087,
          image_height: 512,
          image_width: 512,
        },
        {
          id: 8278629807,
          name: '',
          type: 'TEXT',
          asset_text: 'Nine Nine!',
        },
        {
          id: 8315727242,
          name: 'video1',
          type: 'YOUTUBE_VIDEO',
          video_id: 'ZRCdORJiUgU',
          link: 'https://www.youtube.com/watch?v=ZRCdORJiUgU',
          image_url: 'https://img.youtube.com/vi/ZRCdORJiUgU/1.jpg',
        },
        {
          id: 8319374654,
          name: 'html5 1',
          type: 'MEDIA_BUNDLE',
        },
        {
          id: 8528677661,
          name: '',
          type: 'TEXT',
          asset_text: 'Use your brain',
        },
        {
          id: 8528677664,
          name: '',
          type: 'TEXT',
          asset_text: 'Brain it',
        },
        {
          id: 8528677667,
          name: '',
          type: 'TEXT',
          asset_text: 'This is the brain test game',
        },
        {
          id: 8714917792,
          name: '',
          type: 'TEXT',
          asset_text: 'oh geez',
        },
        {
          id: 8722608519,
          name: '',
          type: 'TEXT',
          asset_text: 'wobalabadabdab',
        },
        {
          id: 8726312186,
          name: '',
          type: 'TEXT',
          asset_text: 'pickleRick',
        },
      ],
    };

    return jsonReply.assets;
  }

  /** Todo: Remove comment - This should return the info from structure.json */
  getAccountHierarchy(/** accountId */) {
    let jsonReply = {
      name: 'Account1',
      id: 7935681790,
      campaigns: [
        {
          name: 'UAC Test - Gardenscapes',
          id: 9505034345,
          adgroups: [
            {
              name: 'Ad group 1',
              id: 95186899405,
            },
            {
              name: 'Ad group 2',
              id: 96689486386,
            },
          ],
        },
        {
          name: 'Another UAC Campaign - Test',
          id: 9505034344,
          adgroups: [
            {
              name: 'This is an AdGroup',
              id: 97909190375,
            },
            {
              name: 'This is another adgroup',
              id: 97982663179,
            },
          ],
        },
      ],
    };
    return jsonReply;
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

  getActiveAssetAdGroups(assetId: number) {
    let assetAdGroups: AssetAdGroups = new Map();
    this._allAssetsAdGroups.filter(function (asset) {
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
