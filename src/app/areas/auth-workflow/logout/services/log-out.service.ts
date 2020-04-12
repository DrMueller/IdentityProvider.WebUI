import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/services';
import { LogOutRequest, ILogOutResult } from '../models';
import { WindowService } from 'src/app/core/window';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(
    private httpService: HttpService,
    private windowService: WindowService) { }

  public logOut(logOutId: string): void {
    const request = new LogOutRequest();
    request.logOutId = logOutId;

    this.httpService.post$<ILogOutResult>('Authentication/LogOut', request).subscribe(logOutResult => {
      this.windowService.navigateTo(logOutResult.postLogoutPath);
    });
  }
}
