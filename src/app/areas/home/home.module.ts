import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDependenciesModule } from 'src/app//mat-deps';
import { BusyIndicationModule } from 'src/app/shared/busy-indication/busy-indication.module';

import { HomeRoutingModule } from './home-routing.module';
import { EntryPointComponent } from './entry-point/entry-point.component';

@NgModule({
  declarations: [
    EntryPointComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDependenciesModule,
    BusyIndicationModule
  ]
})
export class HomeModule {
}
