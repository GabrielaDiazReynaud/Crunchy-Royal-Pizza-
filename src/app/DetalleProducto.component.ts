import { Component } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { FuncionService } from "./funciones.service"
import { menuitem } from "./Menu.model"
import { MenuService } from "./Menu.service"
import { Review } from "./Review.model"
import { AuthService } from "./user/auth.service"


@Component({
    selector: 'menu',
    templateUrl: './DetalleProducto.component.html'



})

export class DetalleComponent {
    
    comment: String
    
    clase: menuitem;
    user:string

    constructor(private menu: MenuService,
        private route: ActivatedRoute, public service: FuncionService, private router: Router, private authService: AuthService) {

    }
    lolazo: Review[]
    ngOnInit() {   
        if (this.service.tipo == "Pizza") {
            this.menu.getPizzasById(+this.route.snapshot.params['myid']).subscribe(data => {
                this.clase = data;
            });
        }
        if (this.service.tipo == "Side") {
            this.menu.getSidesById(+this.route.snapshot.params['myid']).subscribe(data => {
                this.clase = data;
            });
        }
        if (this.service.tipo == "Paquete") {
            this.menu.getPaquetesById(+this.route.snapshot.params['myid']).subscribe(data => {
                this.clase = data;
            });
        }
        this.menu.getReview().subscribe(data => {
            
            this.lolazo = data;
            
            
        });
        

    }

  
  
    obtenerComentario(data) {
       
        
        if (this.authService.getCurrentUser() == null) {
            this.user = "Unknown"
        } else {
            this.user = this.authService.getCurrentUser().nombre
        }

        let newReview: Review = {
      
            Name: this.clase.name,
            Type: this.service.tipo,
            Comment: data.comment,
            UserName: this.user
        }

        this.menu.setReview(newReview).subscribe(()=> {
            
            this.menu.getReview().subscribe(data => {
            
                this.lolazo = data;
                
                
            });
   
            
         })

    }




}