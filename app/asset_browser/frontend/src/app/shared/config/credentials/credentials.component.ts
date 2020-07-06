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
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigSettings } from 'src/app/model/settings';
import { ClientIDPipe, transformAction } from '../../client-id.pipe';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./../config.css'],
})
export class CredentialsComponent implements OnInit {
  form: FormGroup;
  mcc_cid: string = '';
  constructor(
    private _formBuilder: FormBuilder,
    private _cidPipe: ClientIDPipe
  ) {}

  @Input() data: ConfigSettings;
  @Input() editMode: boolean = true;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      mccCtrl: [
        {
          value: this.data.client_customer_id
            ? this._cidPipe.transform(
                this.data.client_customer_id.toString(),
                transformAction.ADD_DASHES
              )
            : '',
          disabled: !this.editMode,
        },
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}'),
        ],
      ],
      clientIDCtrl: [
        {
          value: this.data.client_id ? this.data.client_id : '',
          disabled: !this.editMode,
        },
        Validators.required,
      ],
      clientSecretCtrl: [
        {
          value: this.data.client_secret ? this.data.client_secret : '',
          disabled: !this.editMode,
        },
        Validators.required,
      ],
      devTokenCtrl: [
        {
          value: this.data.developer_token ? this.data.developer_token : '',
          disabled: !this.editMode,
        },
        Validators.required,
      ],
      refreshCodeCtrl: [
        {
          value: this.data.refresh_token ? this.data.refresh_token : '',
          disabled: true,
        },
      ],
    });
  }
  onBlur() {
    // Update the cid to remove any spaces and have dashes if it doesn't
    let mccCtrl = this.form.get('mccCtrl');
    mccCtrl.setValue(mccCtrl.value.trim());
    if (!mccCtrl.invalid) {
      this.mcc_cid = this._cidPipe.transform(
        mccCtrl.value,
        transformAction.ADD_DASHES
      );
    }
  }
}
