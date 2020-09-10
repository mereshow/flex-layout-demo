import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        runGuardsAndResolvers: 'always',
        // Force to run the guards to increase security. This way we only have to check Authentication in the root route
        // leaving the children the task of Authorization
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    {
        path: '**',
        loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
    },  // Wildcard route for a 404 page
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
