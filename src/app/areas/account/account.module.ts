import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { EntryPointComponent } from './entry-point/entry-point';
import { LogInComponent } from './login/components/log-in';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { RxFormsModule } from 'src/app/shared/rx-forms';
import { BusyIndicationModule } from 'src/app/shared/busy-indication/busy-indication.module';
import { AccountCreationComponent } from './create/components/account-creation/account-creation.component';
import { AccountInfoComponent } from './account-info/components/account-info/account-info.component';
import { ConsentComponent } from './consent/components/consent/consent.component';
import { ScopeConsentComponent } from './consent/components/scope-consent/scope-consent.component';
import { ScopeConsentListComponent } from './consent/components/scope-consent-list/scope-consent-list.component';

@NgModule({
  declarations: [
    EntryPointComponent,
    LogInComponent,
    AccountCreationComponent,
    AccountInfoComponent,
    ConsentComponent,
    ScopeConsentComponent,
    ScopeConsentListComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatDependenciesModule,
    RxFormsModule,
    BusyIndicationModule
  ]
})
export class AccountModule { }
