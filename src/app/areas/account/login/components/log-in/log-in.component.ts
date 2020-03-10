import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormGroupBindingService } from 'src/app/shared/rx-forms/services';

import { LogInFormBuilderService, LoginService } from '../../services';
import { LoginRequest } from '../../models';
import { AccountNavigationService } from '../../../common/services/account-navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public get canLogIn(): boolean {
    return !this.formGroup.invalid && !this.isLoggingIn;
  }

  public formGroup: FormGroup;
  public isLoggingIn = false;

  public constructor(
    private navigator: AccountNavigationService,
    private formGroupBinder: RxFormGroupBindingService,
    private formBuilder: LogInFormBuilderService,
    private loginService: LoginService,
    private route: ActivatedRoute) { }

  public createAccount(): void {
    this.navigator.navigateToCreateAccount();
  }

  public logIn(): void {
    this.isLoggingIn = true;
    const request = new LoginRequest();

    this.formGroupBinder.bindToModel(this.formGroup, request);
    this.route.queryParamMap.subscribe(sr => {
      const returnUrl = sr.get('ReturnUrl') ?? '';
      request.returnUrl = returnUrl;
      this.loginService.logIn(request);
    });
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.buildFormGroup();
  }
}
