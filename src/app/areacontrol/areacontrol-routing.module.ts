import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreacontrolPage } from './areacontrol.page';

const routes: Routes = [
  {
    path: '',
    component: AreacontrolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreacontrolPageRoutingModule {}
