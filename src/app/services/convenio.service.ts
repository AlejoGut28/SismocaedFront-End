import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Convenio} from '../models/convenio';
import { Global } from './global';

@Injectable()
export class ConvenioService{
    public url: string;
    private HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(
        private _https: HttpClient
    ){
        this.url = Global.url;
    }

    testService (){
        return 'Probando el service de Angular';
    }

    getConvenios(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._https.get(this.url + 'convenio', {headers: headers});
    }

    saveConvenios(convenio:Convenio): Observable<any>{
        /*let params = JSON.stringify(convenio);
        let headers  = new HttpHeaders().set('content-type', 'application/json');*/

        return this._https.post<any>(this.url + 'saveconv', convenio, {headers: this.HttpHeaders }).pipe(
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
}