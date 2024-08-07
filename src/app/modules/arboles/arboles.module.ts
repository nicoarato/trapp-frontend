import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArbolesRoutingModule } from './arboles-routing.module';

import { HeaderOptionsComponent } from './../../components/header-options/header-options.component';

import { AgregarComponent } from './components/agregar/agregar.component';
import { ArbolComponent } from './components/arbol/arbol.component';

@NgModule({
  declarations: [AgregarComponent, HeaderOptionsComponent, ArbolComponent],
  imports: [
    IonicModule,
    CommonModule,
    ArbolesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArbolesModule { }
