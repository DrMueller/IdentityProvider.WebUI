import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable()
export class BearerAuthInterceptor implements HttpInterceptor {
  public constructor(private oidc: OidcSecurityService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.oidc.getToken();

    request = request.clone({
      withCredentials: true,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }
}
