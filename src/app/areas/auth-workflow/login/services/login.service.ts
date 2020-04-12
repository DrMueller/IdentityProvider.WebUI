import { Injectable } from '@angular/core';
import { LoginRequest, LoginResult } from '../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/core/http/services';
import { WindowService } from 'src/app/core/window';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginResultSubject: BehaviorSubject<LoginResult>;
  constructor(
    private http: HttpService,
    private windowService: WindowService) {
    this.loginResultSubject = new BehaviorSubject(LoginResult.createEmpty());
  }

  public get loginResult$(): Observable<LoginResult> {
    return this.loginResultSubject;
  }

  public logIn(request: LoginRequest): void {
    this.http.post$<LoginResult>('Authentication/Login', request).subscribe(logInResult => {
      this.loginResultSubject.next(logInResult);

      if (logInResult.wasSuccess) {
        this.windowService.navigateTo(logInResult.successReturnUrl);
      }
    });
  }
}
