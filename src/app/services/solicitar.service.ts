import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable, throwError} from 'rxjs';
import { Solicitar } from '../models/Solicitar';
import { catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SolicitarService {

public url: string;
private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(
    private _https: HttpClient
  ) {
    this.url = Global.url;
   }
   getAllSolicitud(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this._https.get(this.url + 'detalle_convo', {headers: headers});
  }
  saveSolicitudes(solicitar: Solicitar): Observable<any>{
    return this._https.post<any>(this.url + 'savedeta_conv', solicitar, {headers: this.HttpHeaders }).pipe(
      catchError(e => {
        if(e.status == 400){
          return throwError(e.error.message);
      }
      console.error(e); 
      console.log('Error al crear el convenio', e.error.message, 'error');
      return throwError(e);
  })
    );
}
delete(iddetalle_convo: number): Observable<any>{
  return this._https.delete<any>(this.url + `deletedeta_conv/${iddetalle_convo}`);
}
}
