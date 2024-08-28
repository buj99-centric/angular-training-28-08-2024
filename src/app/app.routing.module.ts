import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JokeListComponent } from "./joke-list/joke-list.component";
import { JokeDetailsComponent } from "./joke-details/joke-details.component";

const routes: Routes = [
    {path: '', component: JokeListComponent},
    {path: 'details', component: JokeDetailsComponent},
    {path: 'dashboard', loadComponent: () =>  import('./dashboard/dashboard.component').then(c => c.DashboardComponent)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}