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
import { Subscription, from } from 'rxjs';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfigSettings } from '../model/settings';
import {
  StepperSelectionEvent,
  STEPPER_GLOBAL_OPTIONS,
} from '@angular/cdk/stepper';
import { ConfigService } from '../services/config.service';
import { CredentialsComponent } from '../shared/config/credentials/credentials.component';
import { ClientIDPipe, transformAction } from '../shared/client-id.pipe';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-app-setup',
  templateUrl: './app-setup.component.html',
  styleUrls: ['./app-setup.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AppSetupComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  generateTokenURL: string = '';
  verificationTitle: string = 'Setup verification';
  verificationText: string = '';
  setupInProgress: boolean = true;
  isLoggedIn: boolean = false;
  errorFound: boolean = false;

  @ViewChild('credentialsFormGroup') credentials: CredentialsComponent;
  @ViewChild('refreshCodeFormGroup') refreshCode: CredentialsComponent;

  constructor(
    private _configService: ConfigService,
    private _authorizationService: AuthorizationService,
    private _cidPipe: ClientIDPipe,
    public setupDialogRef: MatDialogRef<AppSetupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfigSettings
  ) {}

  ngOnInit(): void {
    this.setupDialogRef.updateSize('800px', '520px');

    this._subscriptions.push(
      this._authorizationService.loggedIn$.subscribe((loggedIn) => {
        this.isLoggedIn = loggedIn;
      })
    )
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
      client_id: this.credentials.form.get('clientIDCtrl').value.trim(),
      client_secret: this.credentials.form.get('clientSecretCtrl').value.trim(),
      developer_token: this.credentials.form.get('devTokenCtrl').value.trim(),
    };
    if (event.selectedIndex === 1) {
      // This is the login-to-server section.
      // Updates the config settings in the Auth service and on the
      // server-side to ensure correct gapi behaviour.
      this._configService.updateConfigCache(config);
      this._configService.setConfigCredentials(
          config.client_customer_id,
          config.client_id,
          config.client_secret,
          config.developer_token
        ).subscribe();
    } else if (event.selectedIndex === 2) {
      // Update the refresh token - this will trigger a verification of
      // the credentials in the backend
      let subscription = this._configService
        .setConfigRefreshCode(
          this._authorizationService.getRefreshToken()
        )
        .subscribe(
          (response) => {
            config.refresh_token = response.body;
            config.config_valid = true;
            this._configService.updateConfigCache(config);
            this.setupInProgress = false;
            this.verificationText = 'Setup complete!';
            this._authorizationService.logout();
            subscription.unsubscribe();
          },
          (error) => {
            this.setupInProgress = false;
            this.errorFound = true;
            this.verificationText = 'Setup failed. Invalid credentials.';
            subscription.unsubscribe();
          }
        );
    }
  }

  forceLogin() {
    this.resetState();

    let subscription = from(this._authorizationService.authenticate(true))
      .subscribe(
        (response) => {
          subscription.unsubscribe();
        },
        (error) => {
          this.errorFound = true;
          this.verificationText = JSON.stringify(error.details);
          subscription.unsubscribe();
        });
  }

  private resetState() {
    this.errorFound = false;
    this.verificationText = '';
    this.setupInProgress = true;
  }
}
