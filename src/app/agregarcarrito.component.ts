import { Component, Input } from "@angular/core";
import { Item } from "./Cart.model";
import { CartService } from "./Cart.service";
import { menuitem } from "./Menu.model";




@Component({

   selector : "botonescomprar",
   template:`
    <button (click)="takeone()" mat-icon-button color="accent"><mat-icon>remove</mat-icon></button>
          <span>{{count}}</span>
          <button (click)="addone()"mat-icon-button color="primary"><mat-icon>add</mat-icon></button>
          <button (click)=" agregaralCarrito()" mat-button class="buttonbck" ><mat-icon>add_shopping_cart</mat-icon></button>
   `
})
export class agregarCarritoComponent{
    count:number=1
   
     @Input()product:menuitem
     constructor(private cservice:CartService){

     }
    addone(){
        this.count=this.count+1
    }
    takeone(){
        if(this.count>1){
        this.count=this.count-1
        }
    }
    agregaralCarrito(){
        let newItem:Item={
          productname:"product",
          cantidad:0,
          description:"-",
          price:0,
          imageUrl:"-",
          incart:false

        }
        newItem.productname=this.product.name
        newItem.price=this.product.price
        newItem.imageUrl=this.product.imageUrl
        newItem.description=this.product.description
        newItem.cantidad=this.count
        newItem.incart=true
        this.cservice.add_to_cart(newItem)
    }
    
    
}