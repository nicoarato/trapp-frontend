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
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'proyecto',
    loadChildren: () => import('./proyecto/proyecto.module').then( m => m.ProyectoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
