import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthenticationGuard } from './auth/authentication.guard';

const routes: Routes = [
    {
        path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        //canLoad: [AuthenticationGuard], // No need to load if not authenticated, just load the login page
        //canActivate: [AuthenticationGuard],
        runGuardsAndResolvers: 'always',
        // Force to run the guards to increase security. This way we only have to check Authentication in the root route
        // leaving the children the task of Authorization
    },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
