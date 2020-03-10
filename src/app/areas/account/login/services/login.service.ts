import { Injectable } from '@angular/core';
import { AccountHttpService } from '../../common/services';
import { LoginRequest, LoginResult } from '../models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: AccountHttpService,
    private httpClient: HttpClient) { }

  public logIn(request: LoginRequest): void {
    this.http.post$<LoginResult>('Login', request).subscribe(() => {
      this.httpClient.get(request.returnUrl).subscribe(sr2 => {
        console.log(sr2);
      });
    });
  }
}
