import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoniometroPage } from './goniometro.page';

const routes: Routes = [
  {
    path: '',
    component: GoniometroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoniometroPageRoutingModule {}
