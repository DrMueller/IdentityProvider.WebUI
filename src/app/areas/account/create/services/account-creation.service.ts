import { Injectable } from '@angular/core';
import { AccountHttpService, AccountNavigationService } from '../../common/services';
import { AccountToCreate } from '../models/account-to-create.model';

@Injectable({
  providedIn: 'root'
})
export class AccountCreationService {
  public constructor(
    private accountsHttpService: AccountHttpService,
    private navigator: AccountNavigationService) { }

  public create(account: AccountToCreate): void {
    this.accountsHttpService.post$<AccountToCreate>('', account).subscribe(() => {
      this.navigator.navigateToLogin();
    });
  }
}
