import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountNavigationService {
  public constructor(private router: Router) { }

  public navigateToCreateAccount() {
    this.router.navigate(['account', 'create']);
  }

  public navigateToLogin() {
    this.router.navigate(['account', 'login']);
  }
}
