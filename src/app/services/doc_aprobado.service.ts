import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {Doc_aprobado} from '../models/doc_aprobado'
import { Global } from './global';

@Injectable()
export class Doc_aprobadoService{
    public url:string;
    private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private _https: HttpClient
    ){
        this.url = Global.url
    }

   testService (){
       return 'Probando service'
   }
   getDoc_aprobado(): Observable<any>{
       let headers = new HttpHeaders().set('Content-Type','application/json');

       return this._https.get(this.url + 'doc_aprobado', {headers: headers});

   }
   
}