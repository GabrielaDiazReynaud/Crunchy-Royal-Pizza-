import { Component } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { FuncionService } from "./funciones.service"
import { menuitem } from "./Menu.model"
import { MenuService } from "./Menu.service"
import { AuthService } from "./user/auth.service"

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html'



})

export class MenuComponent {

    index: number
    pizzaArray: menuitem[]
    sidesArray: menuitem[]
    paquetesArray: menuitem[]
    constructor(private router: Router,public service: FuncionService, public menu: MenuService, public authService: AuthService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.index = this.service.index
        this.menu.getPizzas().subscribe(clases => {
            this.pizzaArray = clases;
        })
        this.menu.getSides().subscribe(clases => {
            this.sidesArray = clases;
        })
        this.menu.getPaquetes().subscribe(clases => {
            this.paquetesArray = clases;
        })


    }

    deleteProduct(id: number, data) {

        console.log(data.id)
        this.menu.deleteProduct(id, data).subscribe(() => {

            this.menu.getPizzas().subscribe(clases => {
                this.pizzaArray = clases;
            })
            this.menu.getSides().subscribe(clases => {
                this.sidesArray = clases;
            })
            this.menu.getPaquetes().subscribe(clases => {
                this.paquetesArray = clases;
            })

        })

        

    }

   


}