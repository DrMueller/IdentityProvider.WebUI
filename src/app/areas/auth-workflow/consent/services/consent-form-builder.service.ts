import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ConsentRequest, ScopeConsent } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConsentFormBuilderService {
  public constructor(private formBuilder: FormBuilder) { }

  public buildFormGroup(request: ConsentRequest): FormGroup {
    return this.formBuilder.group({
      rememberConsent: [false],
      identityScopes: this.buildScopeConsents(request.identityScopes),
      resourceScopes: this.buildScopeConsents(request.resourceScopes)
    });
  }

  private buildScopeConsents(scopes: ScopeConsent[]): FormArray {
    const scopeControls = scopes.map(s => {
      return this.formBuilder.control({
        disabled: s.isRequired,
        value: s.isRequired
      });
    });

    return this.formBuilder.array(scopeControls);
  }
}
