import { Component, OnInit } from '@angular/core';
import { Vacante } from '../../../../models/vacante';
import { VacanteService } from '../../../../services/vacante.service';
import { Router, ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';
import { variable } from '@angular/compiler/src/output/output_ast';
import { UniversidadService } from '../../../../services/universidad.service';
import { Universidad} from 'src/app/models/universidad';
import { E_profesionalService } from 'src/app/services/e_profesional.service';
import { E_profesional } from 'src/app/models/e_profesional';
import { Requisitos_aService } from 'src/app/services/requisitos_a.service';
import { Requisitos_a } from 'src/app/models/requisitos_a';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacante.component.html',
  styles: [],
  providers: [VacanteService, UniversidadService, E_profesionalService, Requisitos_aService]
})
export class VacanteComponent implements OnInit {

  public vacantes: Vacante[] =  [];
  public universidades: Universidad[];
  public url: string;
  nom_uni: string;
  nom_epro: string;
  vac:string;
  descri: string;
  direc: string;
  variable:Vacante = new Vacante();
  universidad: Universidad = new Universidad();
  e_profesional: E_profesional = new E_profesional();
  requisitos_a: Requisitos_a = new Requisitos_a();

  constructor(
    private _vacanteService: VacanteService, private router: Router, private activatedRoute: ActivatedRoute,
    private _universidadService: UniversidadService, private _e_profesionalService: E_profesionalService, 
    private _requisitos_aService: Requisitos_aService
  ) { } 

  ngOnInit(): void {
    this.getVacantes();
    this.getUniversidad();
  }

  getVacantes() {
     this._vacanteService.getVacantes().subscribe(
       (resp:any) => {
         this.vacantes = resp
         console.log(this.vacantes);
       }
     );
  }

  saveUniversidad(){
     console.log(this.universidad);
     this._universidadService.saveUniversidad(this.universidad).subscribe(
        (resp:any) => {
          console.log('Esta es la dara de universidad ' + resp);
          this.getVacantes();
        }
     );
  }

  saveE_profesional(){
    this.e_profesional.iduniversidad = ({"iduniversidad": Number(this.universidad.iduniversidad)} as Universidad);
    console.log(this.e_profesional);
    this._e_profesionalService.saveE_profesional(this.e_profesional).subscribe(
      (resp:any) => {
         console.log('Esto es la escuela profesional ' + resp);
         this.getVacantes();
      }
    );
  }

  saveRequisitos_a(){
    console.log(this.requisitos_a);
    this._requisitos_aService.saveRequisitos_a(this.requisitos_a).subscribe(
        (resp:any) => {
           console.log('Esto es la data de requisitos_a ' + resp);
           this.getVacantes();
        }
    );
  }

  getUniversidad(){
     this._universidadService.getUniversidad().subscribe(
       response => {
         console.table(response);
         this.universidades = response;
       }
     )
  }

}