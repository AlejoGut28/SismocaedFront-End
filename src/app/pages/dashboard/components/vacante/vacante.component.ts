import { Component, OnInit } from '@angular/core';
import { Vacante } from '../../../../models/vacante';
import { VacanteService } from '../../../../services/vacante.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacante.component.html',
  styles: [],
  providers: [VacanteService]
})
export class VacanteComponent implements OnInit {

  public vacantes: Vacante[];
  public url: string;

  constructor(
    private _vacanteService: VacanteService, private router: Router, private activatedRoute: ActivatedRoute
  ) { } 

  ngOnInit(): void {
    this.getVacantes();
  }

  getVacantes() {
     this._vacanteService.getVacantes().subscribe(
       response => {
         this.vacantes = response;
         console.table(response);
       }
     );
  }

}
