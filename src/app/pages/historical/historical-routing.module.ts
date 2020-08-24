import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricalListComponent } from './historical-list/historical-list.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricalListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalRoutingModule { }
