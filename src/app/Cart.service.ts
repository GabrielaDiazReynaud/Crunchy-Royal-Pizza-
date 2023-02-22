import { Injectable } from "@angular/core";
import { Item } from "./Cart.model";




@Injectable()
export class CartService
{   

    add_to_cart(item1:Item){
       if(!! CartItems.find(x=>x.productname==item1.productname)){
        CartItems.find(x=>x.productname==item1.productname).cantidad=item1.cantidad
       }
       else{
        CartItems.push(item1)  
       }
       localStorage.setItem('cart', JSON.stringify(CartItems))
    }

    getlist():Item[]{
        return CartItems
    }

    setlist(list:Item[]){
        CartItems=list
    }
}
 var CartItems:Item[]=[]

