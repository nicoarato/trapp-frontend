import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from './../../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent]
})
export class HomePageModule {}
