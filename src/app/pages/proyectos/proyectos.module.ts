import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarPage } from './../arboles/agregar/agregar.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';


@NgModule({
  declarations: [AgregarPage],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProyectosModule { }
