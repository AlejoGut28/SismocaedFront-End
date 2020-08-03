import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { E_profesional } from '../models/e_profesional';
import { Global } from './global';

@Injectable()
export class E_profesionalService {
     
    public url: string;
    private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private _https: HttpClient
    ) {
        this.url = Global.url;
    }

    testService (){
        return 'Probando el servicio de E_profesional'
    }

    saveE_profesional(e_profesional:E_profesional){
       return this._https.post<any>(this.url + 'savee_p', e_profesional, {headers: this.HttpHeaders}).pipe(
           catchError(e => {
            if(e.status == 400) {
                return throwError(e.error.message);
            }
            console.log(e);
            console.log('La E_profesional no se ha creado ', e.error.message, 'error');
            return catchError(e);
           })
       );
    }

}