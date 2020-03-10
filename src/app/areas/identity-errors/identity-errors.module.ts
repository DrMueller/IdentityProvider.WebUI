import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryPointComponent } from './components/entry-point/entry-point.component';
import { IdentityErrorsRoutingModule } from './identity-errors-routing.module';
import { ErrorDisplayComponent } from './components/error-display';
import { MatDependenciesModule } from 'src/app/mat-deps';

@NgModule({
  declarations: [EntryPointComponent, ErrorDisplayComponent],
  imports: [
    CommonModule,
    IdentityErrorsRoutingModule,
    MatDependenciesModule
  ]
})
export class IdentityErrorsModule { }
