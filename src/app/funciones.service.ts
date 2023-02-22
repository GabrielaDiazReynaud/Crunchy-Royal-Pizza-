import { Injectable } from "@angular/core";
import { Router } from "@angular/router";



@Injectable()
export class FuncionService
{ 
  index:number;
  tipo:string='Pizza'
  id:number
  constructor(private router: Router) {
    
}
  setTipo(tipo:string,id:number)
  {
     this.tipo=tipo
     this.id=id
     this.router.navigateByUrl('CrunchyRoyalPizza/Detalle/'+tipo+'/'+id);
  }


  setindex(num:number){
    this.index=num
  }


}