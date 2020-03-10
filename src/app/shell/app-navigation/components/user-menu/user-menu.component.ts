import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  public get currentLanguage(): string {
    return 'de';
  }

  public get isUserAuthenticated$(): Observable<boolean> {
    return of(false);
  }

  public isAuthenticated: boolean;
  public isUserAuthenticated: boolean;
  public userData: any;
  public userName: string;

  public constructor(
    private oidcSecurityService: OidcSecurityService) {
  }

  public logIn(): void {
    this.oidcSecurityService.authorize();
  }

  public logOut(): void {
    this.oidcSecurityService.logoff();
  }

  public ngOnInit(): void {
    this.oidcSecurityService.getIsAuthorized().subscribe(auth => {
      this.isAuthenticated = auth;
    });

    this.oidcSecurityService.getUserData().subscribe(userData => {
      this.userData = userData;
    });
  }
}
