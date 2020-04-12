import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BusyIndicatorService } from '../../core/loading-indication/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(
    private busyIndicator: BusyIndicatorService) {
  }

  public get versionDescription(): string {
    return environment.version;
  }

  public get showLoadingIndicator$(): Observable<boolean> {
    return this.busyIndicator.showBusyIndicator$;
  }
}
