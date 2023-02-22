import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './register.component.html',
    styles: [`
    em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }

      .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
        margin-left: 324px;
    }

    .form-group {
        margin-bottom: 3rem;
    }

    .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
        border-radius: 19px;
        width: 273px;
        margin-left: 144px;
        background-color: ##575C90;
    }
    `]
    
})
export class RegisterComponent
{
    
    nombre:FormControl
    email: FormControl
    rol: FormControl
    password:FormControl
    registerForm: FormGroup
    
    constructor(public authService: AuthService,private router:Router) {
        this.nombre = new FormControl("", [
            Validators.required, 
            Validators.pattern("[a-zA-Z]*"),
            Validators.maxLength(10)
        ])
        this.email = new FormControl("", [
            Validators.required, 
            Validators.pattern("[a-zA-Z]*"),
            Validators.maxLength(10)
        ])
        this.rol = new FormControl("", [
            Validators.required, 
            Validators.pattern("[a-zA-Z]*"),
            Validators.maxLength(10)
        ])
        this.password = new FormControl("", [
            Validators.required, 
            Validators.pattern("[a-zA-Z]*"),
            Validators.maxLength(10)
        ])
        

        this.registerForm = new FormGroup({
            nombre : this.nombre,
            email : this.email,
            rol: this.rol,
            password: this.password
        })
    }

    
    fnCreateUser(data){
        console.log(data);
        console.log(this.registerForm);
        this.authService.signIn(data).subscribe(()=> {
          if(!this.authService.IsloggedIn()){
            this.authService.setUser(data)
          }
            this.router.navigateByUrl('CrunchyRoyalPizza/Home');
   
            
         })
    }

    

}