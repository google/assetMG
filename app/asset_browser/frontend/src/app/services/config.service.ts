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
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigSettings, YouTubeSettings } from '../model/settings';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private API_SERVER = location.origin;

  /** A cache of the configuration settings */
  private _configSettings: ConfigSettings = null;
  private _YtConfigSettings: YouTubeSettings = null;
  private _configLoaded$ = new BehaviorSubject<boolean>(false);

  /** Reflect the state of the config file */
  configValid: boolean = false;
  configLoaded$ = this._configLoaded$.asObservable();

  constructor(private http: HttpClient) {}

  loadConfigSettings() {
    const endpoint = this.API_SERVER + '/config/';
    let subscription = this.http
      .get<ConfigSettings>(endpoint)
      .subscribe((config) => {
        this._configSettings = config;
        this.configValid = config.config_valid;
        this._configLoaded$.next(this.configValid);
        subscription.unsubscribe();
      });
  }

  getConfigSettings() {
    return this._configSettings;
  }

  updateConfigCache(config: ConfigSettings) {
    this._configSettings = config;
  }

  loadYtConfigSettings(){
    const endpoint = this.API_SERVER + '/yt-config/'
    let subscritpion = this.http
    .get<YouTubeSettings>(endpoint)
    .subscribe((config) => {
      this._YtConfigSettings = config 
      subscritpion.unsubscribe();
    });
  }

  getYtConfigSettings(){
    return this._YtConfigSettings;
  }

  updateYtConfigSettings(config: YouTubeSettings){
    this._YtConfigSettings = config;
  }

  setConfigCredentials(
    mcc: number,
    clientId: string,
    clientSecret: string,
    dev_token: string,
    redirect_uri?: string,
  ): Observable<any> {
    const endpoint = this.API_SERVER + '/set-configs/';
    let configObj: ConfigSettings = {
      client_customer_id: mcc,
      client_id: clientId,
      client_secret: clientSecret,
      developer_token: dev_token,
      redirect_uri: redirect_uri,
    };
    return this.http.post(endpoint, configObj, { observe: 'response' });
  }

  getConfigRefreshCode(refreshCode: string): Observable<any> {
    const endpoint = this.API_SERVER + '/get-refresh-token/';
    return this.http.post(
      endpoint,
      { code: refreshCode },
      { observe: 'response' }
    )
  }

  setConfigRefreshCode(refreshCode: string): Observable<any> {
    const endpoint = this.API_SERVER + '/set-refresh/';
    return this.http.post(
      endpoint,
      { code: refreshCode },
      { observe: 'response' }
    );
  }

  setYouTubeConfig(conf: YouTubeSettings): Observable<any> {
    const endpoint = this.API_SERVER + '/set-yt/';
    return this.http.post(
      endpoint,
      { channel_id: conf.channel_id},
      { observe: 'response' }
    );
  }

  revertConfigSettings(config: ConfigSettings) {
    if (config.config_valid) {
      const endpoint = this.API_SERVER + '/set-configs/';
      let subscription = this.http.post(endpoint, config).subscribe((_) => {
        this.updateConfigCache(config);
        subscription.unsubscribe();
      });
    }
  }
}
