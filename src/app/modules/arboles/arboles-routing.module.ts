import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AgregarComponent } from './components/agregar/agregar.component';
import { ArbolComponent } from './components/arbol/arbol.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar', component: AgregarComponent },
      { path: 'detalle/:id', component: ArbolComponent },
      // { path: 'listado', component: ListadoPage },
      { path: '**', redirectTo: 'agregar' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArbolesRoutingModule { }