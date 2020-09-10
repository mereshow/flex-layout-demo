import { NgModule, Injectable } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "historical",
        loadChildren: () =>
          import("./historical/historical.module").then(m => m.HistoricalModule)
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
