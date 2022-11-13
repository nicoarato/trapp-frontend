import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbolPageRoutingModule } from './arbol-routing.module';

import { ArbolPage } from './arbol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbolPageRoutingModule
  ],
  declarations: [ArbolPage]
})
export class ArbolPageModule {}
