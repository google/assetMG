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
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    public dialog: MatDialog,
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // client-side error
          let errorMessage = `Client Side Error: ${error.error.message}`;
          return throwError(errorMessage);
        }
        if (error.status === 403) {
          this.openErrorDialog(error.error);
        }
        // server-side error
        return throwError(error);
      })
    );
  }

  openErrorDialog(errorMessage) {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '700px',
      disableClose: true,
      autoFocus: false,
      data: { errorMessage: errorMessage },
    });
  }
}
