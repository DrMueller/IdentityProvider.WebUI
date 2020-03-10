import { Injectable } from '@angular/core';
import { SecurityUser } from '../models';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public constructor(private oidc: OidcSecurityService) {

  }

  public createGuestUser(): SecurityUser {
    const guestUser = new SecurityUser();
    guestUser.isAuthenticated = false;
    guestUser.token = '';
    guestUser.userName = 'Guest';
    return guestUser;
  }

  public initializeUser(): SecurityUser {
    return this.createGuestUser();
  }
}
