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
 public  list(): Observable<Publicidad[]>{
    return this._https.get<Publicidad[]>(this.url + 'list');

  }
   public upload(publicidad: File):Observable<any>{
   
    const formData = new FormData();
    formData.append('multipartFile', publicidad);
    return this._https.post<any>(this.url + 'upload', formData);
  }
   public delete(idpublicidad: number): Observable<any>{
    return this._https.delete<any>(this.url + `delete/${idpublicidad}`);
  }
  }
