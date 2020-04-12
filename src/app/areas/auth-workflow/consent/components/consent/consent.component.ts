import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsentRequest } from '../../models';
import { ConsentFormBuilderService, ConsentService } from '../../services';
import { FormGroup, FormArray } from '@angular/forms';
import { ConsentUserResponse } from '../../models/consent-user-response.model';

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
  public request: ConsentRequest;
  private returnUrl: string;

  public constructor(
    private route: ActivatedRoute,
    private formGroupBuilder: ConsentFormBuilderService,
    private consentService: ConsentService) { }

  public acceptConsent(): void {
    const userResponse = this.createResponse(true);
    this.consentService.sendUserResponse(userResponse);
  }

  public disallowConsent(): void {
    const userResponse = this.createResponse(false);
    this.consentService.sendUserResponse(userResponse);
  }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe(sr => {
      this.returnUrl = sr.get('returnUrl') ?? '';
    });

    this.consentService.consentRequest$.subscribe(req => {
      this.request = req;
      this.formGroup = this.formGroupBuilder.buildFormGroup(req);
    });

    this.consentService.createConsentRequest(this.returnUrl);
  }

  private createResponse(wasAccepted: boolean): ConsentUserResponse {
    const userResponse = new ConsentUserResponse();
    userResponse.consentAccepted = wasAccepted;
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

    return userResponse;
  }
}
