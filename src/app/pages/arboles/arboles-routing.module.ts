import { ArbolPage } from './arbol/arbol.page';
import { ListadoPage } from './listado/listado.page';
import { EditarPage } from './editar/editar.page';
import { AgregarPage } from './agregar/agregar.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar', component: AgregarPage },
      { path: 'editar', component: EditarPage },
      { path: 'listado', component: ListadoPage },
      { path: 'arbol', component: ArbolPage },
      { path: '**', redirectTo: 'agregar' }
    ]
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'arbol',
    loadChildren: () => import('./arbol/arbol.module').then( m => m.ArbolPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArbolesRoutingModule { }
