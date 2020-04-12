import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/services';

@Injectable({
  providedIn: 'root'
})

export class SecurityHttpService extends HttpService {
  protected getResourceUrl(): string {
    return 'users';
  }
}
