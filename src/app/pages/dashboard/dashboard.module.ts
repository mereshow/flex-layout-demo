import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  entryComponents: []
})
export class DashboardModule { }
