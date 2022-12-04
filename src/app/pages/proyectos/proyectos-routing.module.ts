import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectoPage } from './proyecto/proyecto.page';
import { ListadoPage } from './../arboles/listado/listado.page';
import { AgregarPage } from './../proyectos/agregar/agregar.page';
import { EditarPage } from './../proyectos/editar/editar.page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar', component: AgregarPage },
      { path: 'editar', component: EditarPage },
      { path: 'listado', component: ListadoPage },
      { path: 'proyecto', component: ProyectoPage },
      { path: '**', redirectTo: 'agregar' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
