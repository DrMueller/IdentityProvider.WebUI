import { Component, OnInit } from '@angular/core';
import { AccountCreationFormBuilderService } from '../../services';
import { FormGroup } from '@angular/forms';
import { AccountCreationService } from '../../services/account-creation.service';
import { RxFormGroupBindingService } from 'src/app/shared/rx-forms/services';
import { AccountNavigationService } from '../../../common/services';
import { AccountToCreate } from '../../models/account-to-create.model';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {
  public formGroup: FormGroup;
  public isCreating = false;

  public constructor(
    private accountCreationService: AccountCreationService,
    private formGroupBinder: RxFormGroupBindingService,
    private formBuilder: AccountCreationFormBuilderService,
    private navigator: AccountNavigationService) { }

  public cancelCreation(): void {
    this.navigator.navigateToLogin();
  }

  public get canCreate(): boolean {
    return !this.formGroup.invalid && !this.isCreating;
  }

  create(): void {
    this.isCreating = true;
    const account = new AccountToCreate();

    this.formGroupBinder.bindToModel(this.formGroup, account);
    this.accountCreationService.create(account);
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.buildFormGroup();
  }
}
