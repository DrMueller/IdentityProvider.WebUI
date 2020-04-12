import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthWorkflowRoutingModule } from './auth-workflow-routing.module';
import { LogInComponent } from './login/components/log-in';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { RxFormsModule } from 'src/app/shared/rx-forms';
import { BusyIndicationModule } from 'src/app/shared/busy-indication';
import { ConsentComponent } from './consent/components/consent';
import { ScopeConsentComponent } from './consent/components/scope-consent';
import { ScopeConsentListComponent } from './consent/components/scope-consent-list';
import { EntryPointComponent } from './entry-point';
import { LogOutComponent } from './logout/components/log-out';

@NgModule({
  declarations: [
    LogInComponent,
    EntryPointComponent,
    ConsentComponent,
    ScopeConsentComponent,
    ScopeConsentListComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    AuthWorkflowRoutingModule,
    MatDependenciesModule,
    RxFormsModule,
    BusyIndicationModule
  ]
})
export class AuthWorkflowModule { }
