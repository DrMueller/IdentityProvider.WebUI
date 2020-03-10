import { Injectable } from '@angular/core';

import { AppAreaFactoryService } from '../../app-areas/services';
import { AppNavigationEntry } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationEntryFactoryService {
  private _cache: Array<AppNavigationEntry> | null = null;

  public constructor(
    private areaFactory: AppAreaFactoryService) { }

  public createNavigationEntries(): AppNavigationEntry[] {
    this.assureInitialized();
    return this._cache!;
  }

  private assureInitialized(): void {
    const areas = this.areaFactory.createAllAreas();

    const entries = areas.map(area => new AppNavigationEntry(
      area.displayText,
      area.baseUrl,
      area.needsAuthentication,
      false));

    this._cache = entries;
  }
}
