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
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMatcher } from '../upload-assets.component';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css'],
})
export class UploadVideoComponent implements OnInit {
  form: FormGroup;
  errorMatcher = new ErrorMatcher();
  @Output() isChildFormValid: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      videoUrlCtrl: ['', [Validators.required]],
    });

    // Update parent form when the value changes to detect valid and invalid states
    this.form.valueChanges.subscribe((value) => {
      if (this.form.get('videoUrlCtrl').value.length) {
        this.isChildFormValid.emit(!this.form.invalid);
      }
    });
  }

  // Reflect valid/invalid state to parent - "empty space" is bypassed by the
  // event emitter previous
  onBackspace() {
    // This gets triggered before the actual text os deleted
    // so we want to emit it when there's one character in the textbox
    if (this.form.get('videoUrlCtrl').value.length == 1) {
      this.isChildFormValid.emit(false);
    }
  }
}
