import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { MenuService } from "./Menu.service";
import { AuthService } from "./user/auth.service";
import { FuncionService } from "./funciones.service";
import { menuitem } from "./Menu.model";



@Component({

    templateUrl: './editarProducto.component.html'
})


export class EditarProducto{

    objeto:any

    id:number
   
    name:FormControl
    price: FormControl
    description: FormControl
    imageUrl:FormControl
    registerForm: FormGroup
    clase:menuitem
    
    constructor(public authService: AuthService,private router:Router,private menu:MenuService,funcion:FuncionService,private route: ActivatedRoute) {
        
       
            console.log(this.menu.currentP)
                this.name = new FormControl( this.menu.currentP?.name,[
                    Validators.required, 
                    Validators.pattern("[a-zA-Z]*"),
                    Validators.maxLength(10)
                ])
                this.price = new FormControl(this.menu.currentP?.price, [
                    Validators.required, 
                    Validators.maxLength(10)
                ])
                this.description = new FormControl(this.menu.currentP?.description, [
                    Validators.required, 
                    Validators.pattern("[a-zA-Z]*"),
                    Validators.maxLength(10)
                ])
                this.imageUrl = new FormControl(this.menu.currentP?.imageUrl, [
                    Validators.required, 
                    Validators.pattern("[a-zA-Z]*"),
                    Validators.maxLength(10)
                ])
        this.registerForm = new FormGroup({
            name : this.name,
            price : this.price,
            description: this.description,
            imageUrl: this.imageUrl,
            
        })
        
        
    }

    fnLogin(data){
        
        let id=+this.route.snapshot.params['myid']
        console.log(id)
        data.id=id
        let menuItm:menuitem={
            id:id,
            name:data.name,
            price:data.price,
            description:data.description,
            imageUrl:data.imageUrl
        }
        this.menu.updateProduct(menuItm,this.menu.tipo,+this.route.snapshot.params['myid']).subscribe(()=> {
            
            this.router.navigateByUrl('CrunchyRoyalPizza/Menu');
   
            
         })
    
    
           
    }
}
