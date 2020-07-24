import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vacante } from '../models/vacante';
import { Global } from '../services/global';

@Injectable()
export class VacanteService {
    public url: string;

    constructor (
        private _http: HttpClient
    ) {  
        this.url = Global.url;
    }

    getVacantes(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'pro_getformato', {headers: headers});
    }
}