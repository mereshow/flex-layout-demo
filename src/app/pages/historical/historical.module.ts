import { NgModule } from '@angular/core';

import { HistoricalRoutingModule } from './historical-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HistoricalListComponent } from './historical-list/historical-list.component';

@NgModule({
  imports: [
    HistoricalRoutingModule,
    SharedModule
  ],
  declarations: [
    HistoricalListComponent
  ],
  entryComponents: [
  ]
})
export class CustomersModule { }
