import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreacontrolPageRoutingModule } from './areacontrol-routing.module';

import { AreacontrolPage } from './areacontrol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreacontrolPageRoutingModule
  ],
  declarations: [AreacontrolPage]
})
export class AreacontrolPageModule {}
