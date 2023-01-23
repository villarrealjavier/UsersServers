import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/servers/interfaces/client.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    const token=localStorage.getItem("token");
  const httpOptions={
    headers: new HttpHeaders({'Authorization':`Bearer ${token}`})
  }
    return this.http.get<User[]>('http://localhost:8000/users', httpOptions)
  }

  getUser(id:number):Observable<User>{
    const token=localStorage.getItem("token");
    const httpOptions={
      headers: new HttpHeaders({'Authorization':`Bearer ${token}`})
    }
    return this.http.get<User>(`http://localhost:8000/users/${id}`,httpOptions)
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
