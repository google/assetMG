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
  EventEmitter,
  Output,
} from '@angular/core';
import {
  UploadComponent,
  FileType,
} from 'src/app/shared/upload/upload.component';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css'],
})
export class UploadImgComponent implements OnInit {
  isValid: boolean = false;
  fileTypes: FileType = FileType.IMG;

  @ViewChild('uploadImg') upload: UploadComponent;
  @Output() isChildFormValid: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor() {}

  ngOnInit(): void {}

  uploadToServer() {
    this.upload.uploadToServer();
  }

  updateIsValid(validEvent: boolean) {
    this.isValid = validEvent;
    this.isChildFormValid.emit(validEvent);
  }
}
