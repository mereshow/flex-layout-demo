import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PagesComponent,
    PageNotFoundComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    SharedModule,
    FlexLayoutModule,
  ]
})
export class PagesModule { }
