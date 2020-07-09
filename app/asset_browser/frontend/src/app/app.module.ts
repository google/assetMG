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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetGalleryComponent } from './asset-gallery/asset-gallery.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetComponent } from './asset/asset.component';
import { AccountCampaignsComponent } from './account-campaigns/account-campaigns.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { AppSetupComponent } from './app-setup/app-setup.component';
import { UploadAssetsComponent } from './upload-assets/upload-assets.component';
import { UploadTextComponent } from './upload-assets/upload-text/upload-text.component';
import { UploadImgComponent } from './upload-assets/upload-img/upload-img.component';
import { UploadVideoComponent } from './upload-assets/upload-video/upload-video.component';
import { UploadHtmlComponent } from './upload-assets/upload-html/upload-html.component';
import { SharedModule } from './shared/shared.module';
import { PreviewComponent } from './preview/preview.component';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    AssetGalleryComponent,
    AssetDetailsComponent,
    AssetComponent,
    AccountCampaignsComponent,
    ToolbarComponent,
    SearchBarComponent,
    SettingsComponent,
    AppSetupComponent,
    UploadAssetsComponent,
    UploadTextComponent,
    UploadImgComponent,
    UploadVideoComponent,
    UploadHtmlComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
