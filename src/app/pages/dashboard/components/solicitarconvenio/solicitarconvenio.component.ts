import { Component, OnInit } from '@angular/core';
import { SolicitarService } from 'src/app/services/solicitar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Solicitar } from 'src/app/models/Solicitar';
import { Convocatoria } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';

@Component({
  selector: 'app-solicitarconvenio',
  templateUrl: './solicitarconvenio.component.html',
  styleUrls: ['./solicitarconvenio.component.css']
})
export class SolicitarconvenioComponent implements OnInit {

  public url: string;
public solicitarLista: Solicitar[] = [];
public convocatorias: Convocatoria[];
public solicitar: Solicitar = new Solicitar();
public convocatoria: Convocatoria = new Convocatoria();

  constructor(private solicitarService: SolicitarService,
    private router: Router, private activatedRoute:ActivatedRoute,
 private convocatoriaService: ConvocatoriaService
    ) { }

  ngOnInit(): void {
    this.getAllSolicitud();
    this.getConvocatoria();
  }
  getAllSolicitud(){
    this.solicitarService.getAllSolicitud().subscribe(
      (data) => {
        this.solicitarLista = data
        console.log(this.solicitarLista)
      }
    );
  }
saveSolicitud(){
  this.solicitar.idconvocatoria = ({"idconvocatoria": Number(this.convocatoria.idconvocatoria)} as Convocatoria)
  console.log(this.solicitar);
  this.solicitarService.saveSolicitudes(this.solicitar).subscribe(
    data => {
      console.log('esta es la data ' + data);
      this.getAllSolicitud();
    }
  );
}


  getConvocatoria(){
    this.convocatoriaService.getConvocatoria().subscribe(
     response => {
       console.table(response)
       this.convocatorias = response;
     }
    );
  }
  delete(iddetalle_convo: number): void{
    this.solicitarService.delete(iddetalle_convo).subscribe(
      data =>{
        this.getAllSolicitud();
      }
    )

  }
}
