import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    PagesRoutingModule,
    LayoutModule,
    SharedModule
  ]
})
export class PagesModule { }
