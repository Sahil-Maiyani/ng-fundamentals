import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { UserEditRouteActivator } from "./user-edit-route-activator";

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [UserEditRouteActivator] },
    { path: 'login', component: LoginComponent }
]