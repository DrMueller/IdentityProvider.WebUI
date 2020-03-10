import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPointComponent } from './entry-point/entry-point';
import { LogInComponent } from './login/components/log-in';
import { AccountCreationComponent } from './create/components/account-creation/account-creation.component';
import { AccountInfoComponent } from './account-info/components/account-info';

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
        path: 'create',
        component: AccountCreationComponent
      },
      {
        path: 'info',
        component: AccountInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
