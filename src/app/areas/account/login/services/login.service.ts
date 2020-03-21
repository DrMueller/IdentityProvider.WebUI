import { Injectable } from '@angular/core';
import { AccountHttpService } from '../../common/services';
import { LoginRequest, LoginResult } from '../models';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginResult: BehaviorSubject<LoginResult>;
  constructor(
    private http: AccountHttpService) {
      const emptyResult = LoginResult.createEmpty();
      this.loginResult = new BehaviorSubject(emptyResult);
    }

  public get loginResult$(): Observable<LoginResult> {
    return this.loginResult;
  }

  public logIn(request: LoginRequest): void {
    this.http.post$<LoginResult>('Login', request).subscribe(sr => {
      this.loginResult.next(sr);
    });
  }
}
