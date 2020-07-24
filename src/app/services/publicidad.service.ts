import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';
import { Publicidad } from '../models/Publicidad';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {
  public url: string;

  constructor(
     private _https: HttpClient
    ) { 
    this.url = Global.url;
  }
  testService (){
    return 'Probando el service de Angular';
}

  getAllPublicidad(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._https.get(this.url + 'publicidad', {headers: headers});
  }
}
