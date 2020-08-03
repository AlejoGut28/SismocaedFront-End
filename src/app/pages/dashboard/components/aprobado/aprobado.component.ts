import { Component, OnInit } from '@angular/core';
import { Doc_aprobado } from "../../../../models/doc_aprobado";
import { Doc_aprobadoService } from "../../../../services/doc_aprobado.service";
import { Global } from '../../../../services/global';
@Component({
  selector: 'app-aprobado',
  templateUrl: './aprobado.component.html',
  styleUrls: [],
  providers: [Doc_aprobadoService]
})
export class AprobadoComponent implements OnInit {
  public docaprobado: Doc_aprobado[];
  public url: string
  constructor(
    private _doc_aprobadoService: Doc_aprobadoService
  ) { }

  ngOnInit(): void {
    this.getDoc_aprobado();
  }
  getDoc_aprobado(){
    this._doc_aprobadoService.getDoc_aprobado().subscribe(
      response => {
        this.docaprobado = response;
        console.table(response)
      }
    )
  }

}
