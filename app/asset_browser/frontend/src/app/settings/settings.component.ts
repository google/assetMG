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
import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { ConfigSettings, YouTubeSettings } from '../model/settings';
import { AppSetupComponent } from '../app-setup/app-setup.component';
import { YtConifgComponent } from '../shared/config/yt-conifg/yt-conifg.component'
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  editMode: boolean = false;
  verificationText: string = '';
  errorFound: boolean = false;

  @ViewChild('ytFormGroup') ytCredentials: YtConifgComponent;

  constructor(
    private _setupDialog: MatDialog,
    private _configService: ConfigService,
    public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  ngOnInit() {
    this.dialogRef.updateSize('900px', '450px');
  }
  onEdit() {
    this.dialogRef.close();
    const configDialogRef = this._setupDialog.open(AppSetupComponent, {
      data: <ConfigSettings>this.data.config,
    });

    let subscription = configDialogRef.backdropClick().subscribe((_) => {
      // Revert back to old config
      this._configService.revertConfigSettings(this.data);
      subscription.unsubscribe();
    });
  }

  onYtSubmit() {
    let YtConf: YouTubeSettings = {
      channel_id: this.ytCredentials.YTform.get('channel').value.trim(),
      api_key: this.ytCredentials.YTform.get('key').value.trim()
    } 
    return this._configService.setYouTubeConfig(YtConf).subscribe(
      (response) => {
          this._configService.updateYtConfigSettings(YtConf)
          this.errorFound = false
          this.verificationText = 'Credentials Updated'
      },
      (error) =>{
        this.errorFound = true
        this.verificationText = 'Invalid Credentials'
      }
    )
  }
}
