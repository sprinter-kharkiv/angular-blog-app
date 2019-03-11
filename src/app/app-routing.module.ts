import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./modules/core/login/login.component";


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/features/home/home.module#HomeModule',
  },
  {
    path: 'login',
    loadChildren: './modules/core/login/login.module#LoginModule',
  },
  {
    path: 'registration',
    loadChildren: './modules/core/registration/registration.module#RegistrationModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
