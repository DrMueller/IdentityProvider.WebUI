import { Injectable } from '@angular/core';
import { IdentityErrorHttpService } from './http/identity-error-http.service';
import { IdentityError, IdentityErrorRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IdentityErrorsDataService {

  public constructor(private http: IdentityErrorHttpService) { }

  public fetchErrorAsync(errorId: string): Promise<IdentityError> {
    const request = new IdentityErrorRequest();
    request.errorId = errorId;
    return this.http.post$<IdentityError>('', request).toPromise();
  }
}
