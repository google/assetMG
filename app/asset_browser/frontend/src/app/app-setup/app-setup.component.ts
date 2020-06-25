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
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfigSettings } from '../model/settings';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { ConfigService } from '../services/config.service';
import { CredentialsComponent } from '../shared/config/credentials/credentials.component';
import { ClientIDPipe, transformAction } from '../shared/client-id.pipe';

@Component({
  selector: 'app-app-setup',
  templateUrl: './app-setup.component.html',
  styleUrls: ['./app-setup.component.css'],
})
export class AppSetupComponent implements OnInit {
  // private _oldConfig: ConfigSettings;
  generateTokenURL: string = '';
  verificationTitle: string = 'Setup verification';
  verificationText: string = '';
  setupInProgress: boolean = true;
  errorFound: boolean = false;

  @ViewChild('credentialsFormGroup') credentials: CredentialsComponent;
  @ViewChild('refreshCodeFormGroup') refreshCode: CredentialsComponent;

  constructor(
    private _configService: ConfigService,
    private _cidPipe: ClientIDPipe,
    public setupDialogRef: MatDialogRef<AppSetupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfigSettings
  ) {}

  ngOnInit(): void {
    this.setupDialogRef.updateSize('800px', '500px');
    // if (this.data.config_valid) {
    //    this._oldConfig = this.data;
    // }
  }

  revertChanges() {}

  selectionChange(event: StepperSelectionEvent) {
    this.resetState();
    let config: ConfigSettings = {
      client_customer_id: Number(
        this._cidPipe.transform(
          this.credentials.form.get('mccCtrl').value,
          transformAction.REMOVE_DASHES
        )
      ),
      client_id: this.credentials.form.get('clientIDCtrl').value,
      client_secret: this.credentials.form.get('clientSecretCtrl').value,
      developer_token: this.credentials.form.get('devTokenCtrl').value,
    };
    if (event.selectedIndex === 1) {
      // Update the config file with the credentials and get the URL
      // to generate the refresh token
      let subscription = this._configService
        .setConfigCredentials(
          config.client_customer_id,
          config.client_id,
          config.client_secret,
          config.developer_token
        )
        .subscribe((response) => {
          this.generateTokenURL = response.body;
          subscription.unsubscribe();
        });
    } else if (event.selectedIndex === 2) {
      // Update the refresh token - this will trigger a varification of
      // the credentials in the backend
      let subscription = this._configService
        .setConfigRefreshCode(
          this.refreshCode.form.get('refreshCodeCtrl').value
        )
        .subscribe(
          (response) => {
            config.refresh_token = response.body;
            config.config_valid = true;
            this._configService.updateConfigCache(config);
            this.setupInProgress = false;
            this.verificationText = 'Setup complete!';
            subscription.unsubscribe();
          },
          (error) => {
            // console.log('Error: ', error);
            // console.log('Config: ', this._oldConfig);
            // if (this._oldConfig) {
            //   this._configService.updateConfigCache(this._oldConfig);
            // }
            this.setupInProgress = false;
            this.errorFound = true;
            this.verificationText = 'Setup failed. Invalid crednetials.';
            subscription.unsubscribe();
          }
        );
    }
  }
  private resetState() {
    this.errorFound = false;
    this.verificationText = '';
    this.setupInProgress = true;
  }
}
