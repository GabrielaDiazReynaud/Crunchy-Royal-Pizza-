import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginComponent } from "./login.component";

@Injectable()
export class ClaseRouteDeactivator implements CanDeactivate<LoginComponent>
{
    canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: 
        RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
            if(component.error){
                return window.confirm('Usuario o contraseña incorrecto')
            }

            return true;
    }

}