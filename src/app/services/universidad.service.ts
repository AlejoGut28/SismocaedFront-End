import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';


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

}