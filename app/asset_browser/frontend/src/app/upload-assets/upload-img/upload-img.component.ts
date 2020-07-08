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
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export enum FileType {
  IMG = 'image/*',
  VIDEO = 'video/*',
  HTML = '.zip',
}
@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css'],
})
export class UploadImgComponent implements OnInit {
  //form: FormGroup;
  uploadAPI: string = 'http://127.0.0.1:5000/upload-files/';
  validImage: boolean = true;
  acceptsType: FileType = FileType.IMG;
  @ViewChild('form') form: ElementRef;
  fileNames: string[] = [];

  constructor() {}
  ngOnInit(): void {}

  onChange(event) {
    for (let file of event.target.files) {
      this.fileNames.push(file.name);
    }
    if (this.fileNames.length > 0) {
      this.validImage = true;
    }
    console.log('names', this.fileNames);
    // To do - check for valid image sizes here
  }

  uploadToServer() {
    console.log('Submit');
    this.form.nativeElement.submit();
  }
}
