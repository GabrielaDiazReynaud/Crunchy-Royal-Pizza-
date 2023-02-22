import { Routes } from "@angular/router";
import { ProductoAgregarComponent } from "./app/agregarP.component";
import { CartComponent } from "./app/Cart.component";
import { DetalleComponent } from "./app/DetalleProducto.component";
import { EditarProducto } from "./app/editarProducto.component";
import { InformacionComponent } from "./app/InformacionPago.component";
import { MenuComponent } from "./app/menu.component";
import { PaginaPrincipalComponent } from "./app/PaginaPrincipal.component";





export const AppRoutes: Routes = [

    { path: 'CrunchyRoyalPizza/Home', component: PaginaPrincipalComponent},
    { path: 'CrunchyRoyalPizza/Cart', component: CartComponent},
    { path: 'CrunchyRoyalPizza/Pago', component: InformacionComponent},
    { path: 'CrunchyRoyalPizza/Menu', component: MenuComponent},
    { path: 'CrunchyRoyalPizza/Agregar', component: ProductoAgregarComponent},
    
    { path: '', redirectTo: 'CrunchyRoyalPizza/Home', pathMatch: 'full'},
    { path: 'user', loadChildren: () => import('./app/user/user.module').then(cl => cl.UserModule) },
    { path: 'CrunchyRoyalPizza/Detalle/:mytipo/:myid', component: DetalleComponent},
    { path: 'CrunchyRoyalPizza/Editar/:mytipo/:myid', component: EditarProducto},


]





