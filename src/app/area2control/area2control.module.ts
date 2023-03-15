import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Area2controlPageRoutingModule } from './area2control-routing.module';

import { Area2controlPage } from './area2control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Area2controlPageRoutingModule
  ],
  declarations: [Area2controlPage]
})
export class Area2controlPageModule {}
