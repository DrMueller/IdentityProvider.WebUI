import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  public userProperties: string[] = [];

  public get isAuthorized$(): Observable<boolean> {
    return this.oicd.getIsAuthorized();
  }

  public constructor(
    private oicd: OidcSecurityService) { }

  ngOnInit(): void {
    debugger;
    this.oicd.getUserData().subscribe(data => {
      this.userProperties = [];
      const props = Object.getOwnPropertyNames(data);

      if (!data) {
        this.userProperties.push('No data');
      } else {
        props.forEach(prop => {
          this.userProperties.push(prop + ': ' + data[prop]);
        });
      }
    });
  }
}
