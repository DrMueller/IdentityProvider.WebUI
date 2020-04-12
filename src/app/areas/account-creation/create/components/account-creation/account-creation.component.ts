import { Component, OnInit } from '@angular/core';
import { AccountCreationFormBuilderService } from '../../services';
import { FormGroup } from '@angular/forms';
import { AccountCreationService } from '../../services/account-creation.service';
import { RxFormGroupBindingService } from 'src/app/shared/rx-forms/services';
import { AccountToCreate } from '../../models/account-to-create.model';
import { NavigationService } from 'src/app/areas/shared/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {
  public get canCreate(): boolean {
    return !this.formGroup.invalid && !this.isCreating;
  }

  public errorMessages$: Observable<string[]>;
  public formGroup: FormGroup;
  public hasErrorMessages$: Observable<boolean>;
  public isCreating = false;

  public constructor(
    private accountCreationService: AccountCreationService,
    private formGroupBinder: RxFormGroupBindingService,
    private formBuilder: AccountCreationFormBuilderService,
    private navigator: NavigationService) { }

  public cancelCreation(): void {
    this.navigator.navigateToLogin();
  }

  create(): void {
    this.isCreating = true;
    const account = new AccountToCreate();

    this.formGroupBinder.bindToModel(this.formGroup, account);
    this.accountCreationService.create(account);
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.buildFormGroup();

    this.errorMessages$ = this.accountCreationService
      .accountCreationResult$
      .pipe(map(f => f.errorMessages));

    this.accountCreationService
      .accountCreationResult$
      .subscribe(() => this.isCreating = false);

    this.hasErrorMessages$ = this.accountCreationService
      .accountCreationResult$
      .pipe(map(f => f.errorMessages.length > 0));
  }
}
