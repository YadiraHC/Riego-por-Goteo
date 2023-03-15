import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Area2controlPage } from './area2control.page';

const routes: Routes = [
  {
    path: '',
    component: Area2controlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Area2controlPageRoutingModule {}
