import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { ClaseNavbarComponent } from './opciones-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaPrincipalComponent } from './PaginaPrincipal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' 
import { AuthService } from './user/auth.service';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/routes';

import { MenuComponent } from './menu.component';

import { FuncionService } from './funciones.service';
import { MenuService } from './Menu.service';


//social login
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
 
} from 'angularx-social-login';
import { ProductoAgregarComponent } from './agregarP.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './Cart.component';
import { agregarCarritoComponent } from './agregarcarrito.component';
import { CartService } from './Cart.service';
import { InformacionComponent } from './InformacionPago.component';
import { DetalleComponent } from './DetalleProducto.component';
import { CommentarioComponent } from './Comentario.component';
import { EditarProducto } from './editarProducto.component';

import { CommonModule } from '@angular/common';





 
@NgModule({
  declarations: [
    AppComponent,
    ClaseNavbarComponent,
    PaginaPrincipalComponent,
    MenuComponent,
    ProductoAgregarComponent,
    CartComponent,
    agregarCarritoComponent,
    InformacionComponent,
    DetalleComponent,
    CommentarioComponent,
    EditarProducto
    
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule ,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
   
  ],
 
  providers: [AuthService,
    FuncionService,CartService, MenuService,
  
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '941560324482-nlgqjc11cae6u0qbj297mmgqejlv4ea7.apps.googleusercontent.com'
            )
          },
          
        ]
      } as SocialAuthServiceConfig,
    }
  
  
  ],

    
   
   
   

  bootstrap: [AppComponent]
})
export class AppModule {
 
  
 }
