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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArbolesRoutingModule { }
