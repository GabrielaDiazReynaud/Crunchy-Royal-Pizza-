import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Item } from "./Cart.model";
import { CartService } from "./Cart.service";




@Component({

    templateUrl: './Cart.component.html'
})
export class CartComponent{
    list:Item[]
   
    

    constructor(public cart:CartService,private router: Router) {
        
    }
    ngOnInit(){
        
        this.cart.setlist(JSON.parse(localStorage.getItem('cart')))

        this.list= this.cart.getlist()
    }
    addone(item:Item){
        item.cantidad=item.cantidad+1
        localStorage.setItem('cart',JSON.stringify(this.list))
    }
    takeone(item:Item){
        if(item.cantidad>1){
            item.cantidad=item.cantidad-1
            localStorage.setItem('cart',JSON.stringify(this.list))
        }
    }
    quitardelCarrito(item:Item){
    this.list= this.list.filter(c=>c.productname!=item.productname)
    this.cart.setlist(this.list)
    localStorage.setItem('cart',JSON.stringify(this.list))
    }

    getTotal():number{
        var total:number=0
        for(let x=0; x<this.list.length;x++){
          total+= this.list[x].cantidad*this.list[x].price
        }
        return total;
    }
    irPago(){
        if(this.list.length>0)
        this.router.navigateByUrl("CrunchyRoyalPizza/Pago")

    }
    
}