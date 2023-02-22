import{Component} from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router";
import { FuncionService } from "./funciones.service";


@Component({
    selector: 'pagina-Principal',
    templateUrl: './PaginaPrincipal.component.html',
    
    styles:[`.highlightimage:hover{
      transform: scale(1.2) !important;
      cursor:url(/assets/images/cursor.png),auto !important;
    }`]
     
    


})

export class PaginaPrincipalComponent{
    constructor(private service:FuncionService, private routes:Router){
    
    }
     
      gettabmenu(id:number){
        this.service.setindex(id)
        this.routes.navigateByUrl("CrunchyRoyalPizza/Menu")
      }
    
}
