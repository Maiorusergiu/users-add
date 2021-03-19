import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../feature-modules/users-module/models/User.model';
import { UserService } from '../feature-modules/users-module/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router,
    private userService: UserService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot){

     /* if(localStorage.getItem('user') != null){
        return true;
      }
      else{
        window.alert("You need to activate one User!");
        return this.route.navigate(['/user/list']);
      }
      */
    const user = this.userService.userValue;
    if(user) {
      return true;
    }
    else{
      window.alert("You need to activate one User!");
      return this.route.navigate(['/user/list']);
    }
  }
  
  
}
