import { Component, OnInit } from '@angular/core';
import { Convenio } from '../../../../models/convenio';
import { ConvenioService } from '../../../../services/convenio.service';
import { Global } from '../../../../services/global';
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Universidad } from 'src/app/models/universidad';
import { UniversidadService } from '../../../../services/universidad.service';
import Swal from 'sweetalert2';
import { ClasGuardService as guard } from 'src/app/guards/clas-guard.service';
import { TokenService } from 'src/app/services/token.service';


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
  iduniversidad: number;
  conv: Convenio = new Convenio();
  conv_borrar: Convenio = new Convenio();
  uni: Universidad = new Universidad();
  roles: string[] = [];
  isAdmin = false;


  constructor(
    private _convenioService: ConvenioService, private router: Router, private activatedRoute: ActivatedRoute,
    private _universidadService: UniversidadService, private _tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.getConvenios();
    this.getUniversidad();
    this.roles = this._tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  getConvenios() {
    canActivate: [guard];
    this._convenioService.getConvenios().subscribe(
      response => {
        expectedRol: ['admin', 'user'];
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
        canActivate: [guard];
        expectedRol: ['admin'];
        console.log('Esta es la data: ' + data);
        this.getConvenios();
      }
    );
    Swal.fire(
      'Hecho!',
      'El convenio se ha registrado con exito',
      'success'
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

  getConvenioId(id: number) {
    this.idconvenio = id;
    console.log(id);
    this._convenioService.getConvenioId(id).subscribe(
      (resp: any) => {
        this.conv = resp;
        console.log(this.conv);
        console.log(resp);
      },
      err => console.log(err)
    );
  }

  getUniId(id: number) {
    this.iduniversidad = id;
    console.log(id);
    this._universidadService.getUniversidadId(id).subscribe(
      (resp: any) => {
        this.uni = resp;
        console.log(this.uni);
      },
      err => console.log(err)
    );
  }

  updateConvenio() {
    console.log('entro al metodo ');
    this.convenio.iduniversidad = ({ "iduniversidad": Number(this.universidad.iduniversidad) } as Universidad);
    console.log(this.convenio.iduniversidad);
    this._convenioService.editConvenio(this.idconvenio, this.conv).subscribe(
      (resp: any) => {
        canActivate: [guard];
        expectedRol: ['admin'];
        console.log(resp);
        this.getConvenios();
      }
    );
    this.conv = new Convenio();
    this.uni = new Universidad();
    Swal.fire(
      'Hecho!',
      'El convenio se ha editado con exito',
      'success'
    )
  }



  deleteConvenio(id: number) {
    Swal.fire({
      title: 'Estas seguro de querer eliminarlo?',
      text: "Ya no podrás revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.value) {
        this.conv_borrar.idconvenio = id;
        this._convenioService.deleteConvenio(id).subscribe(
          (resp: any) => {
            canActivate: [guard];
            expectedRol: ['admin'];
            this.getConvenios();
          }
        );
        Swal.fire(
          'Eliminado!',
          'El convenio ha sido eliminado',
          'success'
        )
      }
    })
  }

  /*objectKeys(object:any){
       const keys = Object.keys(object);
      console.log(keys);
       return keys;
  }*/

}