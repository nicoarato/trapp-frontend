import { LoginPage } from './login/login.page';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [

  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class AuthModule { }
