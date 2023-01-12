import { Component, OnInit } from '@angular/core';
import { User } from '../servers/interfaces/client.interface';
import { UsersService } from '../users/services/users.service';
import { AuthService } from '../servers/services/AuthService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private userService: UsersService,private AuthService:AuthService, private router: Router) { }
  username:string='';
  password:string='';
  login:boolean=false;
  user:User[]=[]
  ngOnInit(): void {
    this.login= this.AuthService.isAuthenticated();
  }

  existUser(){
    console.log('Email: ', this.username, 'Password: ', this.password)
      this.AuthService.login(this.username,this.password)
      .subscribe({
        next: (resp) => {
          if (resp) {
            this.login=true;
            this.router.navigate(['/servers']);
          }
          else {
            this.username=''; 
            this.password='';
            confirm('Email o contraseña incorrectos');
          }
        }
      })
    }
    onlogout(){
      this.AuthService.onlogout();
      this.login=false;
    }
  
    

  

}
