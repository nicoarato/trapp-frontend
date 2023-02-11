import { ListadoPage } from './listado/listado.page';
import { GoniometroPage } from './goniometro/goniometro.page';
import { ClinometroPage } from './clinometro/clinometro.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'clinometro', component: ClinometroPage },
      { path: 'goniometro', component: GoniometroPage },
      { path: 'listado', component: ListadoPage },
      { path: '**', redirectTo: 'listado' }
    ]
  },
  {
    path: 'clinometro',
    loadChildren: () => import('./clinometro/clinometro.module').then( m => m.ClinometroPageModule)
  },
  {
    path: 'goniometro',
    loadChildren: () => import('./goniometro/goniometro.module').then( m => m.GoniometroPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
