import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
