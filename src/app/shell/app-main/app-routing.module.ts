import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/welcome',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../../areas/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'account',
    loadChildren: () => import('../../areas/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'identity-errors',
    loadChildren: () => import('../../areas/identity-errors/identity-errors.module').then(m => m.IdentityErrorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
