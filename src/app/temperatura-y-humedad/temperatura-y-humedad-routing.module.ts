import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperaturaYHumedadPage } from './temperatura-y-humedad.page';

const routes: Routes = [
  {
    path: '',
    component: TemperaturaYHumedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperaturaYHumedadPageRoutingModule {}
