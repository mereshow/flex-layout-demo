import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponentNoGap } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponentNoGap,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
