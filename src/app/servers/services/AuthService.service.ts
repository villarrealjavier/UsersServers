import { Injectable } from "@angular/core";
import { UsersService } from '../../users/services/users.service';
import { User } from '../interfaces/client.interface';
import { AuthGuard } from './AuthGuard.service';
@Injectable()
export class AuthService {
  constructor(private userService: UsersService){
    
  }
  user:User[]=[];
  loggedIn = false;
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(localStorage.getItem('loggin'));
        }, 800);
      }
    );
    return promise;
  }
  login(username:string,password:string) {
    this.userService.getUserAndEmail(username)
    .subscribe({
      next: (resp)=> {
        if(resp.length!=0){
          this.user=resp;
          
        if((this.user[0].email==username) && (this.user[0].name==password)){
          localStorage.setItem('loggin','true');  
          this.isAuthenticated();
        }else{
          localStorage.setItem('loggin','false');
        }
        }else{
          localStorage.setItem('loggin','false');
    
    }
    
  }
})
}}