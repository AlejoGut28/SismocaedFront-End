import { Component, OnInit } from '@angular/core';
import { Detalle_convo } from '../../../../models/detalle_convo';
import { Detalle_convoService } from '../../../../services/detalle_convo.service';
import { Global } from '../../../../services/global';
@Component({
  selector: 'app-detalle-convo',
  templateUrl: './detalle-convo.component.html',
  styles: [],
  providers: [Detalle_convoService]
})
export class DetalleConvoComponent implements OnInit {
     public detalle_convo: Detalle_convo[];
     public url: string 
  constructor(
    private _detalle_convoService: Detalle_convoService
  ) { }
     
  ngOnInit(): void {
    this.getDetalle_convo();
  }
  getDetalle_convo() {
   this._detalle_convoService.getDetalle_convo().subscribe(
     response => {
       this.detalle_convo = response;
       console.table(response)
     }
   )
  }

}

