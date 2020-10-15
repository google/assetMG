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
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { UploadAssetService } from '../../services/upload-asset.service';
import { ValidationResponse } from '../../model/response';

export enum FileType {
  IMG = 'image/*',
  VIDEO = 'video/*',
  HTML = '.zip',
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  fileNames: string[] = [];
  selectedFileName: string = '';
  invalidDimensionsMsg: string = '';
  isError: boolean = false;

  @Input() acceptsType: FileType;
  @ViewChild('form') form: ElementRef;
  @Output() isValid = new EventEmitter<boolean>();

  constructor(private _uploadService: UploadAssetService) {}
  ngOnInit(): void {}

  onChange(event) {
    this.invalidDimensionsMsg = '';
    this.isError = false;
    this.fileNames = [];
    for (let file of event.target.files) {
      this.fileNames.push(file.name);
    }
    if (this.fileNames.length > 0) {
      this.isValid.emit(true);
    } else {
      this.isValid.emit(false);
    }

    // Image size validation
    if (this.acceptsType == FileType.IMG) {
      var file = event.target.files[0];
      var fileReader = new FileReader();
      var img = new Image();
      let self = this;

      fileReader.onload = function (event) {
        img.src = <string>fileReader.result;

        img.onload = function () {
          // Call the Validation API here -
          let subscription = self._uploadService
            .validateDimensions(img.width, img.height)
            .subscribe((response) => {
              console.log(img.height, img.width);
              self.isValid.emit((response.body as ValidationResponse).valid);
              if (!(response.body as ValidationResponse).valid) {
                self.invalidDimensionsMsg = 'Invalid Image Dimensions';
                self.isError = true;
              }
              subscription.unsubscribe();
            });
        };
      };
      fileReader.readAsDataURL(file);
    }

    if (this.fileNames.length) {
      this.selectedFileName = this.fileNames[0];
    } else {
      this.selectedFileName = '';
    }
  }

  uploadToServer() {
    this.form.nativeElement.submit();
  }
}
