import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./User.model";

@Injectable()
export class AuthService
{
    currentUser: User=null
    currentUser2: User=null
   
    constructor(private http:HttpClient) {
        
    }
    getUserByID(username:string): Observable<User>{
        return this.http.get<User>('https://localhost:44320/api/Usuarios/'+username )
    }
    getUsers(): Observable<User[]>{
        return this.http.get<User[]>('https://localhost:44320/api/Usuarios')
    }

    getByInfoId(id: string):User{
        return USERS.find(c => c.nombre === id);
    }
    getByInfoIpass(pass: string):User{
        return USERS.find(c => c.password === pass);
    }

    logIn(userName: string, password: string):boolean{
        console.log(this.getByInfoId(userName));
        if(this.getByInfoId(userName)){
            this.currentUser =  this.getByInfoId(userName)
            return true
        }

        return false
    }

    getCurrentUser(): User{
        return this.currentUser;
    }

    IsloggedIn(): boolean{
        return !!this.currentUser;
    }

    isAdmin():boolean{
       
        if(this.IsloggedIn()){
        if(this.currentUser.rol=="admin")
            
            return true
        }
        return false
    }

    signOut()
    {
        this.currentUser=null
    }

    setUser(data:User):boolean
    {
        
        if(!this.getByInfoId(data.nombre)){
            USERS.push(data)
            this.currentUser =  this.getByInfoId(data.nombre)
            return true
        }

        return false

    }

    signIn(data)
    {
        let options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
        return this.http.post('https://localhost:44320/api/Usuarios/', data, options)
        

    }

    updateUser(data)
    {
        let options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }
      
        return this.http.put<User>('https://localhost:44320/api/Usuarios/'+this.currentUser.nombre, data, options)

    }
}





const USERS:User[]=
[{
    nombre: "cjblue10",
    email:"gaby@hotmail.com",
    password:"1234",
    rol:"admin"
}

]