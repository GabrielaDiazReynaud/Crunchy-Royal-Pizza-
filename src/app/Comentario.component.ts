import { Component } from "@angular/core"

import { MenuService } from "./Menu.service"
import { Review } from "./Review.model"
import { AuthService } from "./user/auth.service"

@Component({
    selector: 'comentario',
    templateUrl: './Comentario.component.html'



})

export class CommentarioComponent {

    reseas:Review[]
    constructor(private menu: MenuService, public authService: AuthService) {

    }

    ngOnInit() {

        this.menu.getReview().subscribe(clases => {
            this.reseas = clases;
        
        })
        

    }

 


}