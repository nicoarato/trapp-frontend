import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoniometroPageRoutingModule } from './goniometro-routing.module';

import { GoniometroPage } from './goniometro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoniometroPageRoutingModule
  ],
  declarations: [GoniometroPage]
})
export class GoniometroPageModule {}
