import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPointComponent } from './components/entry-point';
import { ErrorDisplayComponent } from './components/error-display';

const routes: Routes = [
  {
    path: '',
    component: EntryPointComponent,
    children: [
      {
        path: 'error-display',
        component: ErrorDisplayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityErrorsRoutingModule { }
