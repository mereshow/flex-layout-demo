import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from '../auth/authentication.guard';

@Injectable({
  providedIn: 'root'
})
export class Throttle {
  resolve(): any {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
}

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'historical',
        loadChildren: () => import('./historical/historical.module').then(m => m.CustomersModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

];

/* const routes_OLD: Routes = [{ path: '', component: PagesComponent },
{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AuthGuard]
},
{
  path: 'customers',
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  canActivate: [AuthGuard]
},
{
  path: 'account',
  loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  canActivate: [AuthGuard]
},
{
  path: 'about',
  loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  canActivate: [AuthGuard]
},
{
  path: '**',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}

]; */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
