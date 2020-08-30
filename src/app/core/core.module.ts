import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { SharedModule } from '../shared/shared.module';
import { NotificationComponent } from './model/notification/notification.component';
import { UnauthorizeInterceptor } from './interceptors/unauthorize.interceptor';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    NotificationComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizeInterceptor, multi: true },
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
