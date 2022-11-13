import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinometroPage } from './clinometro.page';

const routes: Routes = [
  {
    path: '',
    component: ClinometroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinometroPageRoutingModule {}
