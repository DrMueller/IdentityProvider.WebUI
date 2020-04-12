import { Injectable } from '@angular/core';
import { AccountToCreate } from '../models/account-to-create.model';
import { HttpService } from 'src/app/core/http/services';
import { NavigationService } from 'src/app/areas/shared/services';
import { AccountCreationResult } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountCreationService {

  private accountCreationResultSubject: BehaviorSubject<AccountCreationResult>;

  public constructor(
    private http: HttpService,
    private navigator: NavigationService) {

    const emptyResult = {
      errorMessages: []
    } as AccountCreationResult;

    this.accountCreationResultSubject = new BehaviorSubject(emptyResult);
  }

  public get accountCreationResult$(): Observable<AccountCreationResult> {
    return this.accountCreationResultSubject;
  }

  public create(account: AccountToCreate): void {
    this.http.post$<AccountCreationResult>('Accounts', account).subscribe((res: AccountCreationResult) => {
      this.accountCreationResultSubject.next(res);
      if (res.errorMessages.length === 0) {
        this.navigator.navigateToLogin();
      }
    });
  }
}
