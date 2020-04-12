import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './login/components/log-in';
import { ConsentComponent } from './consent/components/consent';
import { EntryPointComponent } from './entry-point';
import { LogOutComponent } from './logout/components/log-out';

const routes: Routes = [
  {
    path: '',
    component: EntryPointComponent,
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login',
        component: LogInComponent
      },
      {
        path: 'logout',
        component: LogOutComponent
      },
      {
        path: 'consent',
        component: ConsentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthWorkflowRoutingModule { }
