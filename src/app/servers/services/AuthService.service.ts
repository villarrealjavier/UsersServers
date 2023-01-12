import { Injectable } from "@angular/core";
import { UsersService } from '../../users/services/users.service';
import { User } from '../interfaces/client.interface';
import { AuthGuard } from './AuthGuard.service';
import { Observable, of, switchMap } from 'rxjs';
@Injectable()
export class AuthService {
  constructor(private userService: UsersService){
    
  }
  // user:User[]=[];
  admin=false;
  loggedIn = false;
  isAuthenticated() {
    return localStorage.getItem('loggin')==='true'
  }
  
  login(username:string,password:string): Observable<boolean> {
    return this.userService.getUserAndEmail(username)
    .pipe( switchMap((user=> {
      if(user.length){
        if (user[0].email===username && user[0].name===password){
          localStorage.setItem('loggin', 'true');
          return of(true)
        }
        else{
          localStorage.setItem('loggin', 'false');
          return of(false)
        }
      }else{
        localStorage.setItem('loggin', 'false');
        return of(false)
      }
    })))
    
  }
  onlogout(){
    localStorage.setItem('loggin','false');
  }

  canUpdate(username:string,password:string,rol:string):Observable<boolean>{
    return this.userService.getUserRol(rol)
    .pipe(switchMap((user=>{
      if(user.length){
        if(user[0].email===username && user[0].name===password && user[0].rol==="ADMIN"){
          localStorage.setItem("ADMIN","true");
          return of(true)
        }else{
          localStorage.setItem("ADMIN","false");
          return of(false)
        }
      }else{
        localStorage.setItem("ADMIN","false");
        return of(false)
      }
    })))
      
  }
}



