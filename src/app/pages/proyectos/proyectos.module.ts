import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProyectosRoutingModule } from './proyectos-routing.module';

import { HeaderOptionsComponent } from './../../components/header-options/header-options.component';
import { FooterComponent } from './../../components/footer/footer.component';

import { AgregarComponent } from './components/agregar/agregar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';


@NgModule({
  declarations: [ListadoComponent, AgregarComponent, ProyectoComponent, FooterComponent, HeaderOptionsComponent],
  imports: [
    IonicModule,
    CommonModule,
    ProyectosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProyectosModule { }
