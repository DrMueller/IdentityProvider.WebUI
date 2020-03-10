import { Injectable } from '@angular/core';
import { IdentityErrorHttpService } from './http/identity-error-http.service';
import { IdentityError } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IdentityErrorsDataService {

  public constructor(private http: IdentityErrorHttpService) { }

  public fetchErrorAsync(errorId: string): Promise<IdentityError> {
    return this.http.get$<IdentityError>(errorId).toPromise();
  }
}
