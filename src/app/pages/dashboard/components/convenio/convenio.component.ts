import { Component, OnInit } from '@angular/core';
import { Convenio } from '../../../../models/convenio';
import { ConvenioService } from '../../../../services/convenio.service';
import { Global } from '../../../../services/global';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styles: [],
  providers: [ConvenioService]
})
export class ConvenioComponent implements OnInit {
     public convenios: Convenio[];
     public url: string;

  constructor(
    private _convenioService: ConvenioService
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
}
