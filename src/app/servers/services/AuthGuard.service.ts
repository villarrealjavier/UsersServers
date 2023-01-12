import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService.service';
import { Injectable } from "@angular/core";
@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //     return this.authService.isAuthenticated()
    //     .then(
    //       (authenticated)=>{
    //         if(localStorage.getItem("loggin")==="true"){
    //           return true;
    //         }else{
    //           this.router.navigate(['/']);
    //           return false;
    //         }
    //       }
    //     )
    // }
  
    canActivate():boolean{
      if(localStorage.getItem("loggin")=="true"){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;

      }
    }

    
    // canActivateChild(route: ActivatedRouteSnapshot, 
    //                  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //   return this.canActivate(route, state);
    // }
}