import { Routes } from '@angular/router';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';

export const appRoutes: Routes = [
    {path: '', component: JokeListComponent},
    {path: 'details', component: JokeDetailsComponent},
    {
        path: 'dashboard',
        loadComponent: () =>  import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        children: dashboardRoutes
    },
    {path: 'list', component: JokeListComponent},
    {path: 'list/:id', component: JokeListComponent},
];