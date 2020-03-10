import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AppAreaFactoryService } from '../../app-areas/services';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private router: Router,
    private areaFactory: AppAreaFactoryService) {
  }

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const area = this.areaFactory.createAreaByUrl(state.url);
      if (!area.needsAuthentication) {
        return true;
      }

      this.router.navigate(['/home/welcome'], { queryParams: { returnUrl: state.url } });
      return false;
  }
}
