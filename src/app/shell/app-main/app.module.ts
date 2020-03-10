import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from 'src/app/core/http';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { BusyIndicationModule } from 'src/app/shared/busy-indication/busy-indication.module';
import { RxFormsModule } from 'src/app/shared/rx-forms';

import { AppInitService } from '../app-init/services';
import { AppNavigationModule } from '../app-navigation/app-navigation.module';
import { ErrorHandlingModule } from '../error-handling';
import { AuthModule } from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function initializeApp(appInitService: AppInitService) {
  return () => appInitService.initializeAppAsync();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppNavigationModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BusyIndicationModule,
    ErrorHandlingModule.forRoot(),
    HttpModule,
    HttpClientModule,
    MatDependenciesModule.forRoot(),
    RxFormsModule.forRoot(),
    AuthModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
