import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/servers/interfaces/client.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users')
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(`http://localhost:3000/users/${id}`)
  }
  getUserAndEmail(email:string):Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)
  }

  getUserRol(rol:string):Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:3000/users?rol=${rol}`)
  }
  // getLogin(token:string):Observable<string[]>{
  //   return this.http.post<string[]>(`http://localhost:8000/auth/login`,token)
  // }

  // getRegister(rol:string):Observable<String[]>{
  //   return this.http.get<String[]>(`http://localhost:8000/auth/register`)
  // }
 
}
