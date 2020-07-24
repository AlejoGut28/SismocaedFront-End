import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Detalle_convo} from '../models/detalle_convo';
import { Global } from './global';

@Injectable()
export class Detalle_convoService{
    public url: string;
    constructor(
        private _https: HttpClient
    ){
        this.url = Global.url;
    }
    testService (){
        return 'Probando el service de Angular';
    }
    
    getDetalle_convo(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
  
        return this._https.get(this.url + 'detalle_convo', {headers: headers});
  }
}