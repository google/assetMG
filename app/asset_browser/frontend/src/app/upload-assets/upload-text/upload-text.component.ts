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
  SimpleChanges,
  EventEmitter,
  Output,
  AfterViewInit,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when the parent is invalid */
class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-upload-text',
  templateUrl: './upload-text.component.html',
  styleUrls: ['./upload-text.component.css'],
})
export class UploadTextComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  maxLength: number;
  textAssetType: string;
  errorMatcher = new ErrorMatcher();
  @Input() isHeadline: boolean;
  @Output() isChildFormValid: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.maxLength = 90;
    this.textAssetType = 'Description';

    this.form = this._formBuilder.group({
      textCtrl: [
        '',
        [Validators.required, Validators.maxLength(this.maxLength)],
      ],
    });

    // Update parent form when the value changes to detect valid and invalid states
    this.form.valueChanges.subscribe((value) => {
      if (this.form.get('textCtrl').value.length) {
        this.isChildFormValid.emit(!this.form.invalid);
      }
    });
  }

  ngAfterViewInit() {}

  // Reflect valid/invalid state to parent - "empty space" is bypassed by the
  // event emitter previous
  onBackspace() {
    // This gets triggered before the actual text os deleted
    // so we want to emit it when there's one character in the textbox
    if (this.form.get('textCtrl').value.length == 1) {
      this.isChildFormValid.emit(!this.form.invalid);
    }
  }

  ngOnChanges(change: SimpleChanges) {
    // Reset the input control if the text asset type changed
    if (change.isHeadline.previousValue != change.isHeadline.currentValue) {
      this.form?.get('textCtrl').setValue('');
    }

    // Reset the max allowed text size
    if (this.isHeadline) {
      this.maxLength = 30;
      this.textAssetType = 'Headline';
    } else {
      this.maxLength = 90;
      this.textAssetType = 'Description';
    }

    this.form
      ?.get('textCtrl')
      .setValidators([
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]);
  }
}
