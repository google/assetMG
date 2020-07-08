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
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetType } from '../model/asset';
import { MatStepper } from '@angular/material/stepper';
import { UploadTextComponent } from './upload-text/upload-text.component';
import {
  UploadImgComponent,
  FileType,
} from './upload-img/upload-img.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { UploadHtmlComponent } from './upload-html/upload-html.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { isNgContainer } from '@angular/compiler';
import { UploadAssetService } from '../services/upload-asset.service';

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
  assetType: string;
  types: Map<string, string>;
  canAddAsset: boolean = true;
  isChildFormValid: boolean = true;

  /** Update button params */
  updateInProgress: boolean = false;
  updateMessage: string = '';
  isErrorMessage: boolean = false;

  @ViewChild('uploadText') uploadText: UploadTextComponent;
  @ViewChild('uploadImg') uploadImg: UploadImgComponent;
  @ViewChild('uploadVideo') uploadVideo: UploadVideoComponent;
  @ViewChild('uploadHtml') uploadHtml: UploadHtmlComponent;

  constructor(
    private _uploadService: UploadAssetService,
    public uploadDialogRef: MatDialogRef<UploadAssetsComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public account: Account
  ) {}

  ngOnInit(): void {
    this.types = new Map();
    this.types.set('headline', 'Text - Headline');
    this.types.set('description', 'Text - Description');
    this.types.set('img', 'Image');
    this.types.set('video', 'YouTube Video');
    this.types.set('html', 'HTML');

    this.assetType = this.types.get('description');

    this.uploadDialogRef.updateSize('800px', '520px');
    console.log('Account:', this.account);
  }

  onClose() {
    this.uploadDialogRef.close();
    // Alert if in the middl eof uploads
  }

  onNext(stepper: MatStepper) {
    stepper.next();
    this.isChildFormValid = this.isCurrentStepValid(stepper);
  }
  onBack(stepper: MatStepper) {
    stepper.previous();
    this.isChildFormValid = this.isCurrentStepValid(stepper);
  }

  isCurrentStepValid(stepper: MatStepper): boolean {
    if (stepper.selectedIndex == 0 || stepper.selectedIndex == 2) {
      return true;
    } else {
      switch (this.assetType) {
        case this.types.get('img'):
          return this.uploadImg.validImage;
        case this.types.get('video'):
          return !this.uploadVideo.form.invalid;
        case this.types.get('html'):
          return !this.uploadHtml.form.invalid;
        default:
          return !this.uploadText.form.invalid;
      }
    }
  }

  updateStepValid(isValid: boolean) {
    this.isChildFormValid = isValid;
  }

  onAddAsset() {
    // this._uploadService.uploadImage(this.uploadImg.file, [122133]);
  }
}
