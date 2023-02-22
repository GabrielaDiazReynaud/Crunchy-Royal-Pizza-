import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MenuService } from "./Menu.service";



@Component({

    templateUrl: './agregarP_component.html'
})
export class ProductoAgregarComponent{

    objeto:any

    id
    name
    price
    description
    imageUrl
    Tipo

    

    constructor(private menuService: MenuService,
        private route: ActivatedRoute,private router:Router) {
        
    }
    
    fnLogin(data){
        

      
        this.menuService.setProducto(data,data.Tipo).subscribe(()=> {
            
            this.router.navigateByUrl('CrunchyRoyalPizza/Home');
   
            
         })
    
    
           
    }
}