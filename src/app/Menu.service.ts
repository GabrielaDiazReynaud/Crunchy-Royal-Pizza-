import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Email } from "./Email.model";
import { menuitem } from "./Menu.model";
import { Review } from "./Review.model";


@Injectable()
export class MenuService {
    constructor(private http: HttpClient, private router: Router) {

    }
    tipo: string = 'Pizza'
    id: number
    currentP: menuitem
    index: number;
    currentProductId: number
    /*getUserByID(username:string): Observable<User>{
            return this.http.get<User>('https://localhost:44320/api/Usuarios/'+username )
        }*/
    getReview(): Observable<Review[]> {
        return this.http.get<Review[]>('https://localhost:44320/api/Reviews');
    }

    getPizzas(): Observable<menuitem[]> {
        return this.http.get<menuitem[]>('https://localhost:44320/api/Pizzas');
    }

    getPizzasById(pizzaId: number): Observable<menuitem> {
        return this.http.get<menuitem>('https://localhost:44320/api/Pizzas/' + pizzaId);
    }

    getSidesById(sidesId: number): Observable<menuitem> {
        return this.http.get<menuitem>('https://localhost:44320/api/Sides/' + sidesId);
    }

    getPaquetesById(paquetesId: number): Observable<menuitem> {
        return this.http.get<menuitem>('https://localhost:44320/api/Paquetes/' + paquetesId);
    }

    getSides(): Observable<menuitem[]> {
        return this.http.get<menuitem[]>('https://localhost:44320/api/Sides');
    }
    getPaquetes(): Observable<menuitem[]> {
        return this.http.get<menuitem[]>('https://localhost:44320/api/Paquetes');
    }


    getLastIdPizza(): number {
        const last = PIZZA.length - 1
        console.log("vamos: " + PIZZA[last].id)

        return PIZZA[last].id + 1

    }

    getLastIdSides(): number {
        const last = SIDES.length - 1
        console.log("vamos: " + SIDES[last].id)

        return SIDES[last].id + 1

    }

    getLastId(Objeto: any): number {
        const last = Objeto.length - 1
        console.log("vamos: " + Objeto[last].id)

        return Objeto[last].id + 1

    }

    setProducto(data: any, productos: String) {
        let options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }

        if (productos === "Pizza") {
            /*data.id=this.getLastId(PIZZA)
            PIZZA.push(data)*/
            return this.http.post('https://localhost:44320/api/Pizzas/', data, options)
        }
        if (productos === "Sides") {
            /*data.id=this.getLastId(SIDES)
            SIDES.push(data)*/
            return this.http.post('https://localhost:44320/api/Sides/', data, options)
        }
        if (productos === "Paquetes") {
            /*data.id=this.getLastId(PAQUETES)
            PAQUETES.push(data)*/
            return this.http.post('https://localhost:44320/api/Paquetes/', data, options)
        }

    }





    setReview(data: any)
    {

        let options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }

        return this.http.post('https://localhost:44320/api/Reviews/', data, options)

    }



    setEmail(data:Email)
    {


        let options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }

        return this.http.post('https://localhost:44320/api/Emails/', data, options)

    }

    deleteProduct(id: number, productsUrl: string): Observable<{}> {
        let options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        return this.http.delete(productsUrl + "/" + id, options)
    }

    setIdofProduct(id: number): number {
        return this.currentProductId = id

    }

    updateProduct(product: menuitem, tipo: string,id:number): Observable<menuitem> {
        let options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        console.log(product)
        if (tipo === 'Pizza') {
            return this.http.put<menuitem>('https://localhost:44320/api/Pizzas/' + id, product, options)
        }
        if (tipo === "Sides") {
            return this.http.put<menuitem>('https://localhost:44320/api/Sides/' + product.id, product, options)
        }

        if (tipo === "Paquetes") {
            return this.http.put<menuitem>('https://localhost:44320/api/Paquetes/' + product.id, product, options)
        }
    }
    

   
    setEditar(tipo: string, id: number) {
        this.id = id
        this.tipo = tipo
        console.log(tipo)
        if (tipo == 'Pizza') {
            this.getPizzasById(id).subscribe(data => {
                this.currentP = data
                console.log(data)
                this.router.navigateByUrl('CrunchyRoyalPizza/Editar/' + tipo + '/' + id);
            });
            
        }
        if (tipo == 'Side') {
            this.getSidesById(id).subscribe(data => {
                this.currentP = data
                console.log(data)
                this.router.navigateByUrl('CrunchyRoyalPizza/Editar/' + tipo + '/' + id);
            });
        }
        if (tipo == 'Paquete') {
            this.getPaquetesById(id).subscribe(data => {
                this.currentP = data
                console.log(data)
                this.router.navigateByUrl('CrunchyRoyalPizza/Editar/' + tipo + '/' + id);
            });
        }
        
    }

    getCurrentP():menuitem
    {
        return this.currentP
    }




}
const PIZZA: menuitem[] = [{
    id: 1,
    name: 'Pepperoni Pizza',
    price: 250,
    description: 'Deliciosa masa artesanal , con pasta de tomate fresca, con exquisito peperoni en rodajas y una capa de queso Mozarrella.',
    imageUrl: 'https://images.radio.com/aiu-media/GettyImages1022591094-4f501f2b-add2-40a8-8c63-bd2a699d9f9b.jpg?width=800'
},
{
    id: 2,
    name: 'Ham Pizza',
    price: 250,
    description: 'Deliciosa masa artesanal , con pasta de tomate fresca, con exquisito jamon en rodajas y una capa de queso Mozarrella.',
    imageUrl: 'https://panizzi.pizza/wp-content/uploads/2015/10/pizza-jamon.jpg'
},
{
    id: 3,
    name: 'Pizza SuperSuprema',
    price: 250,
    description: 'Deliciosa masa artesanal , con pasta de tomate fresca, con exquisito de todo y una capa de queso Mozarrella.',
    imageUrl: 'https://panizzi.pizza/wp-content/uploads/2015/10/pizza-veggie.jpg'
}

]
const SIDES: menuitem[] = [{
    id: 1,
    name: 'HotWings',
    price: 150,
    description: 'Deliciosas alitas, sumergidas en salsa picante',
    imageUrl: 'https://healthynestnutrition.com/wp-content/uploads/bfi_thumb/paleo-chicken-wings-o1jv51xoxh3ybw1vai3ytyhnaaa5pffn18fqmb16ao-o1jye9f74rk41fstvo088vptwykuipqphcydxf8wf4.jpg'
},
{
    id: 2,
    name: 'BBQ Boneless',
    price: 350,
    description: 'Deliciosas Boneless, sumergidas en salsa BBQ',
    imageUrl: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/Boneless-bbq.jpg'
},
{
    id: 3,
    name: 'Pan e Ajo',
    price: 250,
    description: 'Delicioso pan crujiente, con ajo y queso',
    imageUrl: 'https://panizzi.pizza/wp-content/uploads/2015/10/panizzitos-ajo.jpg'
}
]
const PAQUETES: menuitem[] = [{
    id: 1,
    name: 'WOWBOX',
    price: 550,
    description: 'Pizza de Jamon, 16 alitas picantes y una pepsi 10 Litros',
    imageUrl: 'https://scontent.fsap1-1.fna.fbcdn.net/v/t31.0-8/19944426_1465928143445349_1408969645808911384_o.jpg?_nc_cat=108&ccb=3&_nc_sid=9267fe&_nc_eui2=AeGViVbgyRvBIsp5NRs_970TvEK_77Qg3VS8Qr_vtCDdVAa2vzECIPR0a-z_7KzE9QAJVBvGB0j5D5GVkT_YZuhd&_nc_ohc=XhJ8IUohjV4AX-DvGwF&_nc_ht=scontent.fsap1-1.fna&oh=bafd82b2ce5e3047015ff8d13b2eb79c&oe=6065CA4D'
}
]


