import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Global } from './global';
import { catchError } from 'rxjs/operators';
import { Universidad } from '../models/universidad';


@Injectable()
export class UniversidadService {
    public url: string;
    private HttpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor (
       private _http: HttpClient   
    ) {
        this.url = Global.url;
    }

    getUniversidad(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

         return this._http.get(this.url + 'universidad', {headers: headers});
    }

    getUniversidadId(id:number): Observable<any>{
        return this._http.get<any>(this.url + 'universidad/' + id, {headers: this.HttpHeaders}).pipe(
            catchError(e => {
                if(e == 400){
                    return throwError(e);
                }
                console.log(e);
                console.log('Error al traer el id ', e.error.message, 'error');
                return throwError(e);
            })
        );

    }

    saveUniversidad(universidad:Universidad): Observable<any>{
        return this._http.post<any>(this.url + 'saveuni', universidad, { headers: this.HttpHeaders}).pipe(
            catchError(e => {
                if(e == 400){
                    return throwError(e);
                }
                console.log(e);
                console.log('Error al crear la universidad');
                return throwError(e);
            })
        );
    }

}