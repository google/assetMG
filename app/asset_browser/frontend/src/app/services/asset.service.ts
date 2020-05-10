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
          id: 8771117953,
          name: '',
          type: 'TEXT',
          asset_text: 'See who blocked you',
        },
        {
          id: 8771117956,
          name: '',
          type: 'TEXT',
          asset_text: 'Who interact with your profile?',
        },
        {
          id: 8771117962,
          name: '',
          type: 'TEXT',
          asset_text: 'Discover who unfollow you',
        },
        {
          id: 8771117941,
          name: '',
          type: 'TEXT',
          asset_text: 'View stories secretly',
        },
        {
          id: 8788897311,
          name: 'AG112-EN-L',
          type: 'YoutubeVideoAsset',
          video_id: 'cxMnkPYj7T8',
          link: 'https://www.youtube.com/watch?v=cxMnkPYj7T8',
          url: 'https://img.youtube.com/vi/cxMnkPYj7T8/1.jpg',
        },
        {
          id: 8788897326,
          name: 'AG110-EN-K',
          type: 'YoutubeVideoAsset',
          video_id: 'VmxNSyUqmm0',
          link: 'https://www.youtube.com/watch?v=VmxNSyUqmm0',
          url: 'https://img.youtube.com/vi/VmxNSyUqmm0/1.jpg',
        },
        {
          id: 8771117995,
          name: 'AG29-EN-K',
          type: 'YoutubeVideoAsset',
          video_id: 'Wu2BNazy41Y',
          link: 'https://www.youtube.com/watch?v=Wu2BNazy41Y',
          url: 'https://img.youtube.com/vi/Wu2BNazy41Y/1.jpg',
        },
        {
          id: 8807432843,
          name: 'EN_20200429_AG124_IMG_20.jpg',
          type: 'ImageAsset',
          url: 'https://tpc.googlesyndication.com/simgad/16824038254193447182',
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
