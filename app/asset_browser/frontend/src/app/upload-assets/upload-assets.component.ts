/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { Account } from '../model/account';
import { MatStepper } from '@angular/material/stepper';
import { UploadTextComponent } from './upload-text/upload-text.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { UploadHtmlComponent } from './upload-html/upload-html.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { UploadAssetService } from '../services/upload-asset.service';
 
import { ErrorStateMatcher } from '@angular/material/core';
import { AssetType } from '../model/asset';
import { STATUS, UploadResponse } from '../model/response';
import { AssetService } from '../services/asset.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountStructComponent } from '../account-struct/account-struct.component';
import { ConfigService } from '../services/config.service';
 
/** Error when the parent is invalid */
export class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control.dirty && form.invalid;
  }
}
 
@Component({
  selector: 'app-upload-assets',
  templateUrl: './upload-assets.component.html',
  styleUrls: ['./upload-assets.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class UploadAssetsComponent implements OnInit {
  typeFormGroup: FormGroup;
  uploadFormGroup: FormGroup;
  uploadAssetType: AssetType;
  assetTypes = AssetType;
  types: Map<AssetType, string>;
  isBulkUpload: boolean;
  // used to disable the 'upload' button when no files are selected
  isBulkFilesSelected: boolean = false;

  /** Dialog initialization values */
  canAddAsset: boolean;
  isTextAsset: boolean = true;
  isChildFormValid: boolean = true;
 
  /** Update button params */
  uploadInProgress: boolean = false;
  uploadMessage: string = '';
  isErrorMessage: boolean = false;
 
  @ViewChild('uploadText') uploadText: UploadTextComponent;
  @ViewChild('uploadImg') uploadImg: UploadImgComponent;
  @ViewChild('uploadVideo') uploadVideo: UploadVideoComponent;
  @ViewChild('uploadHtml') uploadHtml: UploadHtmlComponent;
  @ViewChild('accountAdGroups') adGroups: AccountStructComponent;
 
  constructor(
    private _uploadService: UploadAssetService,
    private _configService: ConfigService,
    private _uploadAssetService: UploadAssetService,
    private _assetService: AssetService,
    private _snackBar: MatSnackBar,
    public uploadDialogRef: MatDialogRef<UploadAssetsComponent>,
    @Inject(MAT_DIALOG_DATA) public account: Account
  ) {}
 
  ngOnInit(): void {
    this.types = new Map();
    this.types.set(this.assetTypes.TEXT_HEADLINE, 'Text - Headline');
    this.types.set(this.assetTypes.TEXT_DESC, 'Text - Description');
    this.types.set(this.assetTypes.IMG, 'Image');
    this.types.set(this.assetTypes.VIDEO, 'YouTube Video');
    this.types.set(this.assetTypes.HTML, 'HTML');
 
    // First selected asset type is image when the dialog loads
    this.canAddAsset = true;
    this.uploadAssetType = this.assetTypes.IMG;
 
    this.uploadDialogRef.updateSize('800px', '520px');
 
    this.uploadDialogRef.beforeClosed().subscribe((result) => {
      this._uploadService.clearUploads();
    });
 
    let yt_creds = this._configService.getYtConfigSettings();
    if (yt_creds.api_key !== '') {
      this._uploadAssetService.loadYtChannelVideos();
    }
  }
 
  onClose() {
    this.uploadDialogRef.close();
  }
 
  onAssetTypeChange(type) {
    // Update whether an asset can be added without getting linked to an ad group
    if (
      type == this.assetTypes.TEXT_DESC ||
      type == this.assetTypes.TEXT_HEADLINE
    ) {
      this.isTextAsset = true;
      this.canAddAsset = false;
    } else {
      this.isTextAsset = false;
      this.canAddAsset = true;
    }
  }

  setIsBulkUpload(value: boolean){
    this.isBulkUpload = value;
  }

  // used to disable/enable the 'upload' button
  setIsBulkFilesSelected(value: boolean){
    this.isBulkFilesSelected = value;
  }

  bulkUploadVideos(){
    let subscription = this.uploadVideo.uploadBulkVids()
    subscription.subscribe((response) =>{
      if (response.status === STATUS.SUCCESS || response.status === STATUS.PARTIAL_SUCCESS){
        for (let asset of <any[]>response.body){
          this._assetService.addNewAsset(asset);
        }
        this.uploadDialogRef.close()
      }
    })
  }
 
  onNext(stepper: MatStepper) {
    if (stepper.selectedIndex == 1) {
      switch (this.uploadAssetType) {
        case this.assetTypes.IMG:
          this.uploadImg.uploadToServer();
          break;
        case this.assetTypes.VIDEO:
          !this.uploadVideo.form.invalid;
          break;
        case this.assetTypes.HTML:
          this.uploadHtml.uploadToServer();
          break;
        default:
          !this.uploadText.form.invalid;
      }
      // Reset any errors before moving to the next step
      this.isErrorMessage = false;
      this.uploadMessage = '';
    }
    stepper.next();
    this.isChildFormValid = this.isCurrentStepValid(stepper);
  }
  onBack(stepper: MatStepper) {
    stepper.previous();
    this.isChildFormValid = this.isCurrentStepValid(stepper);
    this.isBulkUpload = false;
  }
 
  isCurrentStepValid(stepper: MatStepper): boolean {
    if (stepper.selectedIndex == 0 || stepper.selectedIndex == 2) {
      return true;
    } else {
      switch (this.uploadAssetType) {
        case this.assetTypes.IMG:
          return this.uploadImg.isValid;
        case this.assetTypes.HTML:
          return this.uploadHtml.isValid;
        case this.assetTypes.VIDEO:
          return !this.uploadVideo.form.invalid;
        default:
          return !this.uploadText.form.invalid;
      }
    }
  }
 
  updateStepValid(isValid: boolean) {
    this.isChildFormValid = isValid;
  }
 
  updateCanAddAsset(canAdd: boolean) {
    if (
      this.uploadAssetType == this.assetTypes.TEXT_DESC ||
      this.uploadAssetType == this.assetTypes.TEXT_HEADLINE
    ) {
      this.canAddAsset = canAdd;
    }
  }
  onAddAsset() {
    // Start the spinner
    this.uploadInProgress = true;
 
    let assetName = '';
    let assetText = '';
    let url = '';
    let adGroups = this.adGroups.getSelectedAdGroupIDs();
 
    switch (this.uploadAssetType) {
      case this.assetTypes.IMG:
        assetName = this.uploadImg.upload.fileNames[0];
        break;
      case this.assetTypes.HTML:
        assetName = this.uploadHtml.upload.fileNames[0];
        break;
      case this.assetTypes.VIDEO:
        assetName = this.uploadVideo.form.get('videoNameCtrl').value;
        url = this.uploadVideo.form.get('videoUrlCtrl').value;
        break;
      case this.assetTypes.TEXT_DESC:
      case this.assetTypes.TEXT_HEADLINE:
        assetText = this.uploadText.form.get('textCtrl').value;
        break;
    }
 
    if (
      this.uploadAssetType == this.assetTypes.TEXT_DESC ||
      this.uploadAssetType == this.assetTypes.TEXT_HEADLINE
    ) {
      let subscription = this._uploadService
        .addTextAsset(
          this.account.id,
          assetText,
          this.uploadAssetType,
          adGroups
        )
        .subscribe(
          (response) => {
            this.processUploadResponse(response.status, response.body);
            subscription.unsubscribe();
          },
          (error) => {
            this.processUploadResponse(
              STATUS.FAIL,
              this.buildErrorResponse(error)
            );
          }
        );
    } else {
      let subscription = this._uploadService
        .uploadAsset(
          this.account.id,
          assetName,
          this.uploadAssetType,
          adGroups,
          url
        )
        .subscribe(
          (response) => {
            this.processUploadResponse(
              response.status,
              <UploadResponse>response.body
            );
            subscription.unsubscribe();
          },
          (error) => {
            this.processUploadResponse(
              STATUS.FAIL,
              this.buildErrorResponse(error)
            );
          }
        );
    }
  }
 
  processUploadResponse(status, response?: UploadResponse) {
    // Stop the progress bar
    this.uploadInProgress = false;
    if (status != STATUS.SUCCESS) {
      this.isErrorMessage = true;
      let msg = '';
      if (status === STATUS.FAIL) {
        msg = response.msg;
      } else if (status === STATUS.PARTIAL_SUCCESS) {
        let failures = (<any>response).unsuccessfull;
        console.log(failures);
        if (failures) {
          for (let failure of failures) {
            msg += `Update failed for the ad group "${failure.adgroup.adgroup_name}" from campaign "${failure.adgroup.campaign_name}":
                ${failure.error_message}<br/>`;
          }
        } else {
          msg = 'Update failed for some ad groups.';
        }
      }
      this.uploadMessage = msg;
    } else if (response?.asset) {
      // Notify the asset service of newly added asset
      if (response.asset) {
        this._assetService.addNewAsset(response.asset);
        this._snackBar.open('Uploaded Successfully', '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
      this.uploadDialogRef.close({ successful: status == STATUS.SUCCESS });
    }
  }
 
  buildErrorResponse(error) {
    let response = {};
    if (error.error) {
      let msg = '';
      msg += `${error.error.msg}<br/>`;
      let failures = error.error?.failures || error.error;
      if (failures.length) {
        for (let failure of failures) {
          msg += `Update failed for the ad group "${failure.adgroup.adgroup_name}" from campaign "${failure.adgroup.campaign_name}":
          ${failure.error_message}<br/>`;
        }
      } else {
        msg = `${msg}`;
      }
      response['msg'] = msg;
    } else {
      response['msg'] = 'Upload Failed';
    }
    return response;
  }
}