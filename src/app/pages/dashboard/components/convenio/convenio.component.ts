import { Component, OnInit } from '@angular/core';
import { Convenio } from '../../../../models/convenio';
import { ConvenioService } from '../../../../services/convenio.service';
import { Global } from '../../../../services/global';
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Universidad } from 'src/app/models/universidad';
import { UniversidadService } from '../../../../services/universidad.service';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styles: [],
  providers: [ConvenioService, UniversidadService]
})
export class ConvenioComponent implements OnInit {
  public convenios: Convenio[];
  public universidades: Universidad[];
  public url: string;
  public convenio: Convenio = new Convenio();
  public universidad: Universidad = new Universidad();
  p: number;
  idconvenio: number;
  conv: Convenio[];
  conv_borrar: Convenio = new Convenio();


  constructor(
    private _convenioService: ConvenioService, private router: Router, private activatedRoute: ActivatedRoute,
    private _universidadService: UniversidadService
  ) { }

  ngOnInit(): void {
    this.getConvenios();
    this.getUniversidad();
  }

  getConvenios() {
    this._convenioService.getConvenios().subscribe(
      response => {
        this.convenios = response;
        console.table(response);
      }
    );
  }

  saveConvenio() {
    this.convenio.iduniversidad = ({ "iduniversidad": Number(this.universidad.iduniversidad) } as Universidad);
    console.log(this.convenio);
    this._convenioService.saveConvenios(this.convenio).subscribe(
      data => {
        console.log('Esta es la data: ' + data);
        this.getConvenios();
      }
    );
  }

  getUniversidad() {
    this._universidadService.getUniversidad().subscribe(
      response => {
        console.table(response);
        this.universidades = response;
      }
    );
  }

  updateConvenio(convenio: Convenio) {
    console.log('entro al metodo ');
    convenio.idconvenio = this.idconvenio;
    this.convenio.iduniversidad = ({ "iduniversidad": Number(this.universidad.iduniversidad) } as Universidad);
    console.log(convenio);
    this._convenioService.editConvenio(convenio).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getConvenios();
      }
    )
  }

  getConvenioId(id: number) {
    this.idconvenio = id;
    console.log(id);
    this._convenioService.getConvenioId(id).subscribe(
      resp => {
        this.conv = resp;
        console.log(this.conv);
        console.log(resp);
      },
       err => console.log(err)
    );
  }

  deleteConvenio(id: number) {
    this.conv_borrar.idconvenio = id;
    this._convenioService.deleteConvenio(id).subscribe(
      (resp: any) => {
        this.getConvenios();
      }
    );
  }

  objectKeys(object:any){
       const keys = Object.keys(object);
      console.log(keys);
       return keys;
  }
  
}