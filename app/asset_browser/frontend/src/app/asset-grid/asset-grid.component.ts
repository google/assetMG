import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input,
  HostListener,
} from '@angular/core';
import { AssetType, Asset, TextAsset } from '../model/asset';
import { Subscription, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AssetService } from '../services/asset.service';
import { MatDialog } from '@angular/material/dialog';
import { UploadAssetsComponent } from '../upload-assets/upload-assets.component';

const ASSET_TYPES = [
  {
    label: 'All Assets',
    value: AssetType.ALL,
  },
  {
    label: 'Image',
    value: AssetType.IMG,
  },
  {
    label: 'Text',
    value: AssetType.TEXT,
  },
  {
    label: 'Video',
    value: AssetType.VIDEO,
  },
  {
    label: 'HTML',
    value: AssetType.HTML,
  },
];

@Component({
  selector: 'app-asset-grid',
  templateUrl: './asset-grid.component.html',
  styleUrls: ['./asset-grid.component.css'],
})
export class AssetGridComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  activeAssetId: number;
  assets: Asset[];
  filteredAssets: Asset[];

  filterOptions = ASSET_TYPES;
  filterStr: string = '';
  filterType: AssetType = AssetType.ALL;

  @Input() account: Account;
  @Input() openAssetDetails: Function;
  @Input() closeAssetDetails: Function;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  assetsPerPage$: Observable<any>;
  dataSource: MatTableDataSource<Asset> = new MatTableDataSource<Asset>(
    this.filteredAssets
  );

  constructor(
    private _dataService: AssetService,
    private _uploadDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.assetsPerPage$ = this.dataSource.connect();

    this._subscriptions.push(
      this._dataService.allAssets$.subscribe((assets) => {
        this.assets = assets;
        this.filteredAssets = assets;
        if (this.filteredAssets && this.assets) {
          this.dataSource.data = this.filteredAssets;
          this.dataSource.paginator = this.paginator;
        }
      })
    );
  }
  ngOnDestroy() {
    for (let sub of this._subscriptions) {
      sub.unsubscribe();
    }
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  uploadAsset() {
    // Make sure to unselect any assets to avoid loading the campaign selection
    // of any previously selected assets
    this.unselectAsset();

    const uploadDialogRef = this._uploadDialog.open(UploadAssetsComponent, {
      disableClose: true,
      data: this.account,
    });

    uploadDialogRef.afterClosed().subscribe((response) => {
      if (response?.successful) {
        this.paginator.lastPage();
      }
    });
  }

  selectAsset(id) {
    this.activeAssetId = id;
    this.openAssetDetails(id);
  }

  unselectAsset() {
    this.activeAssetId = null;
    this.closeAssetDetails();
  }

  /** Close side nav when escape is pressed */
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.unselectAsset();
  }

  filterByStr(searchStr) {
    this.filterStr = searchStr;
    this.filteredAssets = this.applyFilter();
    this.dataSource.data = this.filteredAssets;
  }

  filterByType(filterAssetType) {
    this.filterType = <AssetType>filterAssetType;
    this.filteredAssets = this.applyFilter();
    this.dataSource.data = this.filteredAssets;
  }

  /** Resturns assets with the search string their name or
   * in their text (for text assets) */
  private applyFilter(): Asset[] {
    // Nothing to filter - return full set of assets
    if (!this.filterStr.length && this.filterType == AssetType.ALL) {
      return this.assets;
    }

    // Filter by name and/or type
    let searchStr = this.filterStr.toLocaleLowerCase();
    return this.assets.filter(
      (asset: Asset) =>
        // Filter assets by string
        (!searchStr.length ||
          asset.name.toLocaleLowerCase().indexOf(searchStr) != -1 ||
          (asset.type === AssetType.TEXT &&
            (asset as TextAsset).asset_text
              .toLocaleLowerCase()
              .indexOf(searchStr) != -1)) &&
        // filter assets by type
        (this.filterType === AssetType.ALL || asset.type === this.filterType)
    );
  }
}
