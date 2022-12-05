import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectoPage } from './../proyectos/proyecto/proyecto.page';
import { EditarPage } from './../proyectos/editar/editar.page';

import { AgregarComponent } from './components/agregar/agregar.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar', component: AgregarComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'editar', component: EditarPage },
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
