import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
{
    path:'',
    pathMatch:'full',
    redirectTo:'login'
},
    {
 path:'login',
 component:LoginComponent
},{
    path:'dashboard',
    component:DashboardComponent
}
]