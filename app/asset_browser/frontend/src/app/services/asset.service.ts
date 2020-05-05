import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Asset } from './../model/asset';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private assetSource = new BehaviorSubject<Asset>(null);
  private assetAdGroups: number[];
  activeAsset = this.assetSource.asObservable();

  constructor() {}

  changeAsset(asset: Asset) {
    this.assetSource.next(asset);
    this.assetAdGroups = this.getAssetAdGroups(asset.id);
  }

  getAllAssets() {
    return [
      {
        id: 8170555646,
        name: 'video_file.jpg',
        type: 'YoutubeVideoAsset',
        video_id: 'ukjDKYS8gPM',
        link: 'https://www.youtube.com/watch?v=ukjDKYS8gPM',
        url: 'https://img.youtube.com/vi/ukjDKYS8gPM/1.jpg',
        adgroups: [97909190375, 97982663179],
      },
      {
        id: 8037638620,
        name: '',
        type: 'TEXT',
        asset_text: 'Become a virtual Gardner',
      },
      {
        id: 8170555649,
        name: 'None',
        type: 'YoutubeVideoAsset',
        video_id: 'MkOlifBjmBI',
        link: 'https://www.youtube.com/watch?v=MkOlifBjmBI',
        url: 'https://img.youtube.com/vi/MkOlifBjmBI/1.jpg',
        adgroups: [97982663179],
      },
      {
        id: 8048065853,
        name: 'ph.jpg',
        type: 'ImageAsset',
        url: 'https://tpc.googlesyndication.com/simgad/14098414386513970705',
        adgroups: [95186899405],
      },
      {
        id: 8315727242,
        name: 'video1',
        type: 'YoutubeVideoAsset',
        video_id: 'ZRCdORJiUgU',
        link: 'https://www.youtube.com/watch?v=ZRCdORJiUgU',
        url: 'https://img.youtube.com/vi/ZRCdORJiUgU/1.jpg',
        adgroups: [95186899405],
      },
      {
        id: 8037638617,
        name: '',
        type: 'TEXT',
        asset_text: 'Loads of fun!',
      },
    ];
  }

  getAccountHierarchy() {
    return {
      name: 'Account1',
      id: 7935681790,
      campaigns: [
        {
          name: 'UAC Test - Gardenscapes',
          id: 9505034345,
          adGroups: [
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
          adGroups: [
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
  }

  getAssetAdGroups(assetId: number) {
    let adGroups: number[];
    switch (assetId) {
      case 8170555646:
        adGroups = [97909190375, 97982663179];
        break;
      case 8170555649:
        adGroups = [97982663179];
        break;
      case 8048065853:
        adGroups = [95186899405];
        break;
      case 8315727242:
        adGroups = [95186899405];
        break;
    }
    return adGroups;
  }
}
