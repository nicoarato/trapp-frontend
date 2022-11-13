import { AgregarPage } from './agregar/agregar.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArbolesRoutingModule } from './arboles-routing.module';


@NgModule({
  declarations: [AgregarPage],
  imports: [
    CommonModule,
    ArbolesRoutingModule
  ]
})
export class ArbolesModule { }
