import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment';

import { AppNavigationEntry } from '../../models';
import { AppNavigationEntryFactoryService } from '../../services';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})

export class AppNavigationComponent implements OnInit {
  public get isSidebarOpen(): boolean {
    return this._isSidebarOpen;
  }

  public get versionDescription(): string {
    return environment.version;
  }
  public appNavigationEntries: AppNavigationEntry[] = [];

  public isRouterLoading = false;

  @ViewChild('sideNav', { static: false }) public sideNav: MatSidenav;
  private _isSidebarOpen: boolean;

  public constructor(
    private navigationEntriesFactory: AppNavigationEntryFactoryService) {
  }

  public closeSideNav(): void {
    this.sideNav.close();
  }

  public ngOnInit(): void {
    this.appNavigationEntries = this.navigationEntriesFactory.createNavigationEntries();
    this._isSidebarOpen = false;
  }

  public sidebarOpenChanged(isOpen: boolean): void {
    this._isSidebarOpen = isOpen;
  }

  public toggleSideNav(): void {
    this.sideNav.toggle();
  }
}
