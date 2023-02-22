import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { RegisterComponent } from "./register.component";
//import { ProfileComponent } from "./profile.component";
//import { RegisterComponent } from './register.component';

//localhost:4200/
export const UserRoutes: Routes = [
    { path: 'profile', component: ProfileComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},

]