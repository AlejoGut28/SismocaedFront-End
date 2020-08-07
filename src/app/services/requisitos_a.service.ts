import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Requisitos_a } from '../models/requisitos_a';
import { Global } from './global'; 


@Injectable()
export class Requisitos_aService {
     public url: string;
     private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

     constructor(
        private _https: HttpClient
     ) {
         this.url = Global.url;
     }    

     testService (){
         return 'Probando el service de Requisitos_a';
     }

     saveRequisitos_a(requisitos_a: Requisitos_a): Observable<any>{
         return this._https.post<any>(this.url + 'upload/file', requisitos_a, {headers: this.HttpHeaders}).pipe(
             catchError(e => {
                 if(e.status == 400) {
                     return throwError(e.error.message);
                 }
                 console.log(e);
                 console.log('Error al enviar el requisito ', e.error.message, 'error');
                 return throwError(e);
             })
         );
     }
}