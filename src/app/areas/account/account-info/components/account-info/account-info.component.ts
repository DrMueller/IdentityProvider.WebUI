import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { AccountHttpService } from '../../../common/services';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  public userProperties: string[] = [];
  public constructor(
    private http: AccountHttpService,
    private oicd: OidcSecurityService) { }

  ngOnInit(): void {
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


    this.http.get$('UserInfo').subscribe(sr => {
      debugger;
      console.log(sr);
    });
  }
}
