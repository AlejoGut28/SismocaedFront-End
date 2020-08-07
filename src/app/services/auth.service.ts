import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';
  private HttpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
      private _httpClient: HttpClient   
  ) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this._httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario, {headers: this.HttpHeaders}).pipe(
       catchError(e => {
          if(e == 400) {
            return throwError(e);
          }
          console.log(e);
          console.log('Error al crear el usuario ', e.error.message, 'error');
            return throwError(e);
       })
    );
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this._httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario, {headers: this.HttpHeaders}).pipe(
       catchError(e => {
          if(e == 400) {
            return throwError(e);
          }
          console.log(e);
          console.log('Error al crear el usuario ', e.error.message, 'error');
            return throwError(e);
       })
    );
  }

}
