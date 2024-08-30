import { Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { NotFoundComponent } from "./not-found/not-found.component";

async function delay3Seconds(): Promise<boolean> {
    //const x = inject(HttpClient);
    await new Promise(_ => setTimeout(_, 3000));
    return true;
}

export const dashboardRoutes: Routes = [
    {path:'first', component: FirstComponent, canActivate: [delay3Seconds] },
    {path:'second', component: SecondComponent},
    {path:'**', component: NotFoundComponent},
]