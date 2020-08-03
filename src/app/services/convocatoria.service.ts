import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class ConvocatoriaService {
  public url: string;
  private HttpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  //Cambio_ url por prueba
  constructor(private _http: HttpClient) {
    this.url = Global.url_detalle;
  }
  getConvocatoria(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + '/convocatoria', { headers: headers });
  }
}
