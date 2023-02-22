import{Component} from "@angular/core"
import { Router } from "@angular/router"

import { SocialAuthService, SocialUser } from "angularx-social-login"
import { AuthService } from "./user/auth.service"

import { FuncionService } from "./funciones.service"



@Component({
    selector: 'clase-navbar',
    templateUrl: './opciones-navbar.component.html',

    styles:[`element.style {
        transform: none;
        visibility: visible;
        background: #EDEBCE;
    }
    
    
    .mat-drawer-inner-container {
        width: 100%;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
       
    }`]

})

export class ClaseNavbarComponent{
   showFiller=false

   userLogged:SocialUser
    isLogged:boolean
   constructor(public authService:AuthService,private router:Router,private authcos:SocialAuthService,private service:FuncionService) { 
    
}

ngOnInit()
{
    this.authcos.authState.subscribe(

        data=>{this.userLogged=data;
        this.isLogged =(this.userLogged !==null);}
    )
}

logout()
{
    
    this.authcos.signOut();
    window.location.reload();
}

signOut()
{
    this.authService.signOut();
    this.router.navigateByUrl("/user/login")
}


  gettabmenu(id:number){
    this.service.setindex(id)
    this.router.navigateByUrl("CrunchyRoyalPizza/Menu")
  }

}

