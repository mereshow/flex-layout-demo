import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    SharedModule,
    PageNotFoundRoutingModule,
  ],
  declarations: [
    PageNotFoundComponent
  ],
})
export class PageNotFoundModule { }
