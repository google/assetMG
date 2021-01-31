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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBtnComponent } from './progress-btn/progress-btn.component';
import { LoaderComponent } from './loader/loader.component';
import { CredentialsComponent } from './config/credentials/credentials.component';
import { RefreshCodeComponent } from './config/refresh-code/refresh-code.component';
import { YtConifgComponent } from './config/yt-conifg/yt-conifg.component';
import { ClientIDPipe } from './client-id.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '../interceptors/http-error.interceptor';
import { LoaderInterceptor } from '../interceptors/loader.interceptor';
import { MaterialModule } from './material.module';
import { LoaderService } from '../services/loader.service';
import { UploadComponent } from './upload/upload.component';
import { ErrorMsgPipe } from './error-msg.pipe';

@NgModule({
  declarations: [
    ProgressBtnComponent,
    LoaderComponent,
    CredentialsComponent,
    RefreshCodeComponent,
    UploadComponent,
    ClientIDPipe,
    ErrorMsgPipe,
    YtConifgComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    ProgressBtnComponent,
    LoaderComponent,
    CredentialsComponent,
    RefreshCodeComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UploadComponent,
    ErrorMsgPipe,
    YtConifgComponent,
  ],
  providers: [
    LoaderService,
    ClientIDPipe,
    ErrorMsgPipe,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class SharedModule {}