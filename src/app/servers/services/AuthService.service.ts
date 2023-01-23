import { Injectable } from "@angular/core";
import { UsersService } from '../../users/services/users.service';
import { User } from '../interfaces/client.interface';
import { AuthGuard } from './AuthGuard.service';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private http:HttpClient){
    
  }
  
  // user:User[]=[];
  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
 
  admin=false;
  loggedIn = false;


   isAuthenticated(){
    const token=localStorage.getItem("token");
    const httpOptions2={
      headers: new HttpHeaders({'Authorization':`Bearer ${token}`})
    }
    return this.http.get<any>(`http://localhost:8000/jwt`,httpOptions2)
    .pipe(switchMap(resp=>{
        return of(true)
    }),catchError(error=>{
      return of(false)
    }))
  }
  // isAuthenticated() {
  //   return localStorage.getItem('loggin')==='true'
  // }
  
  login(email:string,password:string): Observable<boolean> {
    return this.http.post<any>(`http://localhost:8000/auth/login`,{'email':email,'password':password}, this.httpOptions)
    .pipe(switchMap(resp=>{
     
        localStorage.setItem('token', resp.access_token);
        localStorage.setItem('loggin',"true");
        return of(true);
      
    }),catchError(error=>{
      localStorage.setItem('loggin',"false");
      localStorage.removeItem("token");
      
      return of(false)
    }))
   
    
  }
  onlogout(){
    localStorage.setItem('loggin','false');
    localStorage.removeItem("token");
  }

  
      
  
}



