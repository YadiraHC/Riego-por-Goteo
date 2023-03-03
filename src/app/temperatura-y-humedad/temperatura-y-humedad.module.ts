import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperaturaYHumedadPageRoutingModule } from './temperatura-y-humedad-routing.module';

import { TemperaturaYHumedadPage } from './temperatura-y-humedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperaturaYHumedadPageRoutingModule
  ],
  declarations: [TemperaturaYHumedadPage]
})
export class TemperaturaYHumedadPageModule {}
