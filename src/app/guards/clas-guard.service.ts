import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ClasGuardService implements CanActivate {

  realRol: string;
 
  constructor(
    private _tokenService: TokenService, private _router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{  
    const expectedRol = route.data.expectedRol;
    const roles = this._tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach(rol => {
      if(rol == 'ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });
    if(!this._tokenService.getToken() || expectedRol.indexOf(this.realRol) == -1){
       this._router.navigate[('dashboard')];
       return false;
    }
    return true;
  }
}
