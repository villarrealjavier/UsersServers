import { Component, OnInit } from '@angular/core';
import { User } from '../servers/interfaces/client.interface';
import { UsersService } from '../users/services/users.service';
import { AuthService } from '../servers/services/AuthService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private userService: UsersService,private AuthService:AuthService) { }
  username:string='';
  password:string='';
  user:User[]=[]
  ngOnInit(): void {
  }

  existUser(){
    this.AuthService.login(this.username,this.password);
    }
  
    

  

}
