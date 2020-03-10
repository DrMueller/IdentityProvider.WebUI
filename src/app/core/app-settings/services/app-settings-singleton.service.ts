import { Injectable } from '@angular/core';

import { AppSettings } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsSingletonService {

  public get instance(): AppSettings {
    return this._appSettings;
  }

  private _appSettings: AppSettings;

  public async initializeAsync(): Promise<void> {
    const appSettings = await fetch('./app-settings/appsettings.json');
    const data = await appSettings.json() as AppSettings;

    this._appSettings = data;
  }
}
