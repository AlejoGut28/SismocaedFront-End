import { Component, OnInit } from '@angular/core';
import { Vacante } from '../../../../models/vacante';
import { VacanteService } from '../../../../services/vacante.service';
import { Router, ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';
import { variable } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacante.component.html',
  styles: [],
  providers: [VacanteService]
})
export class VacanteComponent implements OnInit {

  public vacantes: Vacante[] =  [];
  public url: string;
  nom_uni: string;
  nom_epro: string;
  vac:string;
  descri: string;
  direc: string;
  variable:Vacante = new Vacante();

  constructor(
    private _vacanteService: VacanteService, private router: Router, private activatedRoute: ActivatedRoute
  ) { } 

  ngOnInit(): void {
    this.getVacantes();
  }

  getVacantes() {
     this._vacanteService.getVacantes().subscribe(
       (resp:any) => {
         this.vacantes = resp
         console.log(this.vacantes);
       }
     );
  }
}