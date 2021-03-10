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
  EventEmitter,
  Output,
  HostListener,
  Input,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() btnLabel = "";
  private _subscriptions: Subscription[] = [];

  constructor(private _authService: AuthorizationService) {}
  
  ngOnInit(): void {
    this._subscriptions.push(
      this._authService.loggedIn$.subscribe((loggedIn) => {
        this.setLabel(loggedIn);
      })
    );
  }

  ngOnDestroy() {
    for (let sub of this._subscriptions) {
      sub.unsubscribe();
    }
  }

  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    this.btnClick.emit(event);
  }

  public setLabel(loggedIn) {
    if (loggedIn) {
      this.btnLabel = "Logout";
    } else {
      this.btnLabel = "Login";
    }
  }

  public loginOrOut() {
    this._authService.loginOrOut();
  }
}
