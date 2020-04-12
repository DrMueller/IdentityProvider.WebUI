import { Component, Input } from '@angular/core';
import { ScopeConsent } from '../../models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-scope-consent',
  templateUrl: './scope-consent.component.html',
  styleUrls: ['./scope-consent.component.scss']
})
export class ScopeConsentComponent {
  @Input() public control: FormControl;
  @Input() public formGroup: FormGroup;
  @Input() public scopeConsent: ScopeConsent;
}
