import { Component, Input } from '@angular/core';
import { ScopeConsent } from '../../models';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scope-consent-list',
  templateUrl: './scope-consent-list.component.html',
  styleUrls: ['./scope-consent-list.component.scss']
})
export class ScopeConsentListComponent {

  public get hasConsents() {
    return this.scopeConsents && this.scopeConsents.length > 0;
  }

  @Input() public consentsDescription: string;
  @Input() public formArray: FormArray;
  @Input() public formGroup: FormGroup;
  @Input() public scopeConsents: ScopeConsent[];
}
