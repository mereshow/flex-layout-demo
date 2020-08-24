import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';


import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { SharedModule } from '../shared/shared.module';
import { NotificationComponent } from './model/notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
  NotificationComponent],
  providers: [
    { provide: NGXLogger, useClass: NGXLogger },
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
