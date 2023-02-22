import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { RegisterComponent } from "./register.component";
//import { ProfileComponent } from "./profile.component";
//import { RegisterComponent } from './register.component';
import { UserRoutes } from "./user.routes";

@NgModule({
    declarations: [
       // ProfileComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent
      ],
      imports: [
        // BrowserModule,
        // RouterModule.forRoot(AppRoutes)
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
        
      ],
      providers: [
        
      ],
      bootstrap: []
})
export class UserModule
{

}