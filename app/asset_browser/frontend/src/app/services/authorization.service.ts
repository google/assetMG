import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  authInstance = null;
  refreshToken = null;
  loggedIn$: Observable<boolean>;
  private loggedInSubject: BehaviorSubject<boolean>;

  constructor(private _configService: ConfigService) {
    this.retrieveStoredRefreshToken().then((token) => {
      if (token) {
        this.refreshToken = token;
        this.loggedInSubject = new BehaviorSubject<boolean>(true);
      } else {
        this.loggedInSubject = new BehaviorSubject<boolean>(false);
      }
      this.loggedIn$ = this.loggedInSubject.asObservable();
    });
  }

  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve 
    // function is the callback passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
      console.log("GAPI LOADED");
    });

    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {
      var config = this._configService.getConfigSettings();

      await gapi.auth2
        .init({
          client_id: config.client_id,
          scope: "https://www.googleapis.com/auth/adwords"
        })
        .then(auth => {
          this.authInstance = auth;
        });
    });
  }

  async authenticate(force=false) {
    var error = "";
    var storedToken = await this.retrieveStoredRefreshToken();
    if (!force && storedToken) {
      this.refreshToken = storedToken;
      this.loggedInSubject.next(true);
    } else {
      // Initialize gapi if not done yet
      if (!this.authInstance) {
        await this.initGoogleAuth();
      }

      // Get the refresh access token
      var refreshAccessToken = await this.authInstance.grantOfflineAccess({
        access_type: "offline",
        prompt: "consent",
        scope: "https://www.googleapis.com/auth/adwords"
      })
      .then((res) => {
        var refreshAccessToken = res.code;
        return refreshAccessToken;
      })
      .catch((err) => {
        error = err["error"];
      });

      // Quick exit
      if (error) throw new Error(error);

      await this._configService
            .getConfigRefreshCode(refreshAccessToken)
            .toPromise()
            .then((response) => {
              this.refreshToken = response.body;
              this.loggedInSubject.next(true);
              this.storeRefreshToken(this.refreshToken);
            })
            .catch((err) => {
              error = err["error"];
            });
    }

    if (error) {
      throw new Error(error);
    }
  }

  private async storeRefreshToken(token: string) {
    window.localStorage.setItem('refreshToken', token);
  }

  private async retrieveStoredRefreshToken() {
    return window.localStorage.getItem('refreshToken');
  }

  private async removeStoredRefreshToken() {
    window.localStorage.removeItem('refreshToken');
  }

  public getRefreshToken() {
    if (!this.refreshToken) {
      throw new Error("No refresh token found. Please login.");
    }
    return this.refreshToken;
  }

  public async login() {
    await this.authenticate();
  }

  public async logout() {
    this.refreshToken = null;
    this.loggedInSubject.next(false);
    await this.removeStoredRefreshToken();
  }

  public loginOrOut() {
    if (this.loggedInSubject.value) {
      this.logout()
    } else {
      this.login();
    }
  }
}
