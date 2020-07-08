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
  uploadAPI: string = 'http://127.0.0.1:5000/upload-files/';
  fileNames: string[] = [];

  @Input() acceptsType: FileType;
  @ViewChild('form') form: ElementRef;
  @Output() isValid = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    for (let file of event.target.files) {
      this.fileNames.push(file.name);
    }
    if (this.fileNames.length > 0) {
      this.isValid.emit(true);
    } else {
      this.isValid.emit(false);
    }
    console.log('names', this.fileNames);
    // To do - check for valid image sizes here
  }

  uploadToServer() {
    console.log('Submit');
    this.form.nativeElement.submit();
  }
}
