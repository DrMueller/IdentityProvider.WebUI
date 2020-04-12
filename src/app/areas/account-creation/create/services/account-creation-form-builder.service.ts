import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AccountCreationFormBuilderService {
  public constructor(private formBuilder: FormBuilder) { }

  public buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      userName: [undefined, [Validators.required]],
      password: [undefined, [Validators.required]]
    });
  }
}
