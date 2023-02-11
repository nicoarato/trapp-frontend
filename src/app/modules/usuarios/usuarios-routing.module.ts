import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './components/agregar/agregar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar', component: AgregarComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'detalle/:id', component: UsuarioComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
