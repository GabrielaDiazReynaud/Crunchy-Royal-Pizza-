import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
import { AuthService } from "./auth.service";
import { User } from "./User.model";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        
        .login-thumbnail
        {
            background-size: 726px 489px;
            background-repeat: no-repeat, no-repeat;
            position: absolute;
            top: 328px;
            right: 586px;
            padding: 32px;
            display: block;
            width: 709px;
        }
        .form-control {
            display: block;
            width: 208%;
            height: calc(1.5em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            margin-left: 9.5rem;
        }

        .label {
            display: inline-block;
            margin-bottom: 0.5rem;
            width: 148px;
            margin-left: 40px;


        }

        .btn:not(:disabled):not(.disabled) {
            cursor: pointer;
    margin-left: 9.5rem;
    width: 316px;
}
        }
        .card {
            
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
        }


        }
        
    `]
})
export class LoginComponent
{
    constructor(private authcos:SocialAuthService,private authService: AuthService, private router: Router) {       
        
    }
    
    nombre:string
    password:string
    socialUser:SocialUser
    userLogged:SocialUser
    isLogged:boolean=false
    error:boolean=false


    ngOnInit()
    {
        this.authcos.authState.subscribe(

            data=>{this.userLogged=data;
            this.isLogged =(this.userLogged !==null);}
        )
    }
    arrUser:User[]
    fnLogin(data){

        console.log(data)
    
        var si: boolean = false
        this.authService.getUsers().subscribe(data1=>{
            this.arrUser= data1
            si= !!this.arrUser.find(c=> c.nombre == data.nombre)
            console.log(this.arrUser)
            if(si==true){
                this.authService.getUserByID(data.nombre).subscribe(data2 => {
                    this.authService.currentUser2=data2
                    if(si==true &&  this.authService.currentUser2.password === data.password){
                        this.authService.currentUser =  this.authService.currentUser2
                        this.router.navigateByUrl("CrunchyRoyalPizza/Home")
                     
                        this.error=false
                    }
                    else if(!this.isLogged)
                    this.error=true
                });
            }
            else{
                this.error=true
            }
        });
       
       
        
        
}  
       

    fnSignIn(data)
    {
        if(this.authService.setUser(data.nombre)){
            this.router.navigateByUrl("CrunchyRoyalPizza/Home")
            this.error=false
        }else
            this.error=true

    }

    register()
    {
        this.router.navigateByUrl("user/register")
    }

    signInWithGoogle(): void {
        this.error=false
        this.authcos.signIn(GoogleLoginProvider.PROVIDER_ID).then(
            data=>{
                this.socialUser=data
                this.isLogged=true
                this.router.navigateByUrl("CrunchyRoyalPizza/Home")
            }
        )
        ;
      }


      logout():void{
          this.authcos.signOut();
      }
}