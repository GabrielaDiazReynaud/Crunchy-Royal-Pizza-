import { variable } from "@angular/compiler/src/output/output_ast";
import{Component} from "@angular/core"
import { Router } from "@angular/router"
import { Item } from "./Cart.model"
import { CartService } from "./Cart.service"
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MenuService } from "./Menu.service";
import { Email } from "./Email.model";

@Component({
    templateUrl: './InformacionPago.component.html'



})

export class InformacionComponent{
   nombre:string
   direccion:string
   telefono:string
   constructor(private mservice:MenuService, private cservice:CartService, private router: Router,private http: HttpClient){
    
    }
    list:Item[]
ngOnInit(){
    
    this.list=this.cservice.getlist()
}


  

saveInfo(data){
console.log(data.nombre)
console.log(data.direccion)
console.log(data.telefono)
window.alert("GRACIAS POR TU COMPRA")
let email:Email={
  id:1,
  froms:"",
  tos:"",
  subject:"",
  text:""
}
email.text+="<h1>CRUNCHY ORDER</h1><h2>Informacion Cliente</h2>";
email.text+="<strong> Nombre Cliente:</strong> "+data.nombre+"<br><strong> Direccion: </strong>"+data.direccion+"<br> <strong>Telefono:</strong> "+data.telefono+"<br><strong> Total:</strong> Lps. "+this.getTotal();
email.text+="<br><br><h2>Items</h2>";
for(let x=0; x<this.list.length;x++){
  email.text+="<strong>Producto: </strong>"+this.list[x].productname+" <strong><span>&nbsp;&nbsp;</span>  Cantidad #= </strong> "+this.list[x].cantidad+"<br>";
}
this.mservice.setEmail(email).subscribe(()=> { 
})
var newarr:Item[]=[]
this.cservice.setlist(newarr)
localStorage.setItem('cart', JSON.stringify(this.cservice.getlist()))
this.router.navigateByUrl("CrunchyRoyalPizza/Home")
}

getTotal():number{
    var total:number=0
    
    
    for(let x=0; x<this.list.length;x++){
      total+= this.list[x].cantidad*this.list[x].price
    }
    return total;
}
goBack(){
    this.router.navigateByUrl("CrunchyRoyalPizza/Cart")
}


  

}
