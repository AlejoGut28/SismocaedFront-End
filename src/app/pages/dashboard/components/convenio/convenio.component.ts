import { Component, OnInit } from '@angular/core';
import { Convenio } from '../../../../models/convenio';
import { ConvenioService } from '../../../../services/convenio.service';
import { Global } from '../../../../services/global';
import { Router , ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styles: [],
  providers: [ConvenioService]
})
export class ConvenioComponent implements OnInit {
     public convenios: Convenio[];
     public url: string;
     public convenio: Convenio = new Convenio();

  constructor(
    private _convenioService: ConvenioService, private router:Router, private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.getConvenios();
  }

   getConvenios() {
     this._convenioService.getConvenios().subscribe(
       response => {
          this.convenios = response;
          console.table(response);
          }
     );
   }

   saveConvenio(){
     this._convenioService.saveConvenios(this.convenio).subscribe(
         (data) => {
            this.router.navigate(['dashboard/convenio'])
            console.log(this.convenio);
            this.getConvenios();
         }
     );
   }


}
