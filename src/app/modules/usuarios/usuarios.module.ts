import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';

import { HeaderOptionsComponent } from '../../components/header-options/header-options.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { AgregarComponent } from './components/agregar/agregar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


@NgModule({
  declarations: [AgregarComponent, ListadoComponent, UsuarioComponent, FooterComponent, HeaderOptionsComponent],
  imports: [
    IonicModule,
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsuariosModule { }
