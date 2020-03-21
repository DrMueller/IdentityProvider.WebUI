import { Component, OnInit } from '@angular/core';
import { AccountHttpService } from '../../../common/services';
import { ActivatedRoute } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ConsentRequest } from '../../models';
import { ConsentFormBuilderService } from '../../services';
import { FormGroup, FormArray } from '@angular/forms';
import { ConsentUserResponse } from '../../models/consent-user-response.model';
import { ConsentResult } from '../../models/consent-result.model';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {

  public get canAcceptConsent(): boolean {
    return !this.formGroup.invalid;
  }

  public get hasIdentityScopes(): boolean {
    return this.request.identityScopes.length > 0;
  }

  public get identityScopesFormArray(): FormArray {
    return this.formGroup.get('identityScopes')! as FormArray;
  }

  public get resourceScopesFormArray(): FormArray {
    return this.formGroup.get('resourceScopes')! as FormArray;
  }

  public formGroup: FormGroup = new FormGroup({});
  public request: ConsentRequest = ConsentRequest.createEmpty();
  private returnUrl: string;

  public constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private http: AccountHttpService,
    private formGroupBuilder: ConsentFormBuilderService) { }

  public acceptConsent(): void {
    const userResponse = new ConsentUserResponse();
    userResponse.consentAccepted = true;
    userResponse.returnUrl = this.returnUrl;
    userResponse.rememberConsent = this.formGroup.get('rememberConsent')!.value;

    const selectedIdentityScopeNames = this.identityScopesFormArray.controls
      .map((c, i) => c.value ? this.request.identityScopes[i] : null)
      .filter(scope => scope)
      .map(scope => scope!.name);

    const selectedResourceScopeNames = this.resourceScopesFormArray.controls
      .map((c, i) => c.value ? this.request.resourceScopes[i] : null)
      .filter(scope => scope)
      .map(scope => scope!.name);

    userResponse.consentedScopeNames = selectedIdentityScopeNames.concat(selectedResourceScopeNames);
    this.http.post$<ConsentResult>('Consent', userResponse).subscribe(res => {

      this.httpClient.get(res.redirectUri).subscribe(() => {
      }, (error) => {
        // As IdentityServer4 does a redirect, it get interpreted as a error
        // So we fetch the URL manually and then redirect
        const url = error.url;
        const searchParam = new URLSearchParams(url);
        const redirectUri = searchParam.get('redirect_uri')!;
        window.location.replace(redirectUri);
      });
    });
  }

  public disallowConsent(): void {
    const userResponse = new ConsentUserResponse();
    userResponse.consentAccepted = false;

    this.http.post$('Consent', userResponse);
  }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe(sr => {
      this.returnUrl = sr.get('returnUrl') ?? '';
    });

    const params = new HttpParams()
      .append('returnUrl', this.returnUrl);

    this.http.get$<ConsentRequest>('Consent', params).subscribe(req => {
      this.request = req;
      this.formGroup = this.formGroupBuilder.buildFormGroup(req);
    });
  }
}
