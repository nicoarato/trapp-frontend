import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinometroPageRoutingModule } from './clinometro-routing.module';

import { ClinometroPage } from './clinometro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinometroPageRoutingModule
  ],
  declarations: [ClinometroPage]
})
export class ClinometroPageModule {}
