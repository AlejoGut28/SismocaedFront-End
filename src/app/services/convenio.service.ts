import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Convenio} from '../models/convenio';
import { Global } from './global';

@Injectable()
export class ConvenioService{
    public url: string;

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

    saveConvenios(convenio:Convenio){
        return this._https.post<Convenio>(this.url + 'saveconv', convenio);
    }
}