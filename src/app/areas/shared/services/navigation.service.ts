import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  public navigateToCreateAccount(): void {
    this.navigateTo('account', 'create');
  }

  public navigateToLogin(): void {
    this.navigateTo('auth', 'login');
  }

  private navigateTo(...route: string[]): void {
    this.route.queryParams.subscribe(sr => {
      this.router.navigate(route, {
        queryParams: sr
      });
    });
  }
}
