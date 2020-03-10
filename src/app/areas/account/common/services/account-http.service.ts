import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/core/http/services';

@Injectable({
  providedIn: 'root'
})
export class AccountHttpService extends HttpBaseService {
  protected getResourceUrl(): string {
    return 'Accounts';
  }
}
