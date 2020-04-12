import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { EntryPointComponent } from './entry-point';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { RxFormsModule } from 'src/app/shared/rx-forms';
import { AccountCreationComponent } from './create/components/account-creation';
import { BusyIndicationModule } from 'src/app/shared/busy-indication';

@NgModule({
  declarations: [
    EntryPointComponent,
    AccountCreationComponent
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
