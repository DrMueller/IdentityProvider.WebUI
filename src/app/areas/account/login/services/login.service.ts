import { Injectable } from '@angular/core';
import { AccountHttpService } from '../../common/services';
import { LoginRequest, LoginResult } from '../models';
import { OidcSecurityService } from 'angular-auth-oidc-client';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: AccountHttpService,
    private oidc: OidcSecurityService) { }

  public logIn(request: LoginRequest): void {
    this.http.post$<LoginResult>('Login', request).subscribe(() => {
      this.oidc.authorize();
    });
  }
}
