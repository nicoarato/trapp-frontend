import { AgregarPage } from './agregar/agregar.page';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArbolesRoutingModule } from './arboles-routing.module';


@NgModule({
  declarations: [AgregarPage],
  imports: [
    CommonModule,
    ArbolesRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ArbolesModule { }
