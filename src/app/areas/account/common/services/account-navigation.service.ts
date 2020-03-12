import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountNavigationService {
  public constructor(private router: Router) { }

  public navigateToAccountInfo(): void {
    this.router.navigate(['account', 'info']);
  }

  public navigateToCreateAccount(): void {
    this.router.navigate(['account', 'create']);
  }

  public navigateToLogin(): void {
    this.router.navigate(['account', 'login']);
  }
}
