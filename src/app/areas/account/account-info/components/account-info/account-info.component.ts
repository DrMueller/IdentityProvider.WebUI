import { Component, OnInit } from '@angular/core';
import { AccountHttpService } from '../../../common/services';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  public userInfo = '';
  constructor(private http: AccountHttpService) { }

  ngOnInit(): void {
    this.http.get$<string>('UserInfo').subscribe(sr => {
      this.userInfo = sr;
    });
  }
}
