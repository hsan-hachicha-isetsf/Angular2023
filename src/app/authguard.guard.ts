import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
  constructor(private userService: UserService,private router: Router  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    var isAuth = false;
 
    if (localStorage.getItem('token')) {
      isAuth=true;
    }
    else{
      this.router.navigate(['/login']);
    }
    return isAuth;
  }

  }
  

