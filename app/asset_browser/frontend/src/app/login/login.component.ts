import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
  Input,
} from '@angular/core';
import { from, Subscription } from 'rxjs';
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
