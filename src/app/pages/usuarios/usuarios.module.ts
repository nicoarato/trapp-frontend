import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { AgregarComponent } from './components/agregar/agregar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


@NgModule({
  declarations: [AgregarComponent, ListadoComponent, UsuarioComponent],
  imports: [
    IonicModule,
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsuariosModule { }
