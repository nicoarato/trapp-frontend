import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArbolesRoutingModule } from './arboles-routing.module';

import { AgregarComponent } from './components/agregar/agregar.component';

@NgModule({
  declarations: [AgregarComponent],
  imports: [
    IonicModule,
    CommonModule,
    ArbolesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArbolesModule { }
