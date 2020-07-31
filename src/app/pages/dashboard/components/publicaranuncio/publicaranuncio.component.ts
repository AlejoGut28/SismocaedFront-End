import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Publicidad } from 'src/app/models/Publicidad';
import { PublicidadService } from 'src/app/services/publicidad.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-publicaranuncio',
  templateUrl: './publicaranuncio.component.html',
  styleUrls: ['./publicaranuncio.component.css']
})
export class PublicaranuncioComponent implements OnInit {

  @ViewChild('publicidadInputFile', {static: false}) publicidadFile: ElementRef;

  publicidad: File;
  publicidadMin: File;

  public url: string;

  publicidadLista: Publicidad[] = [];

  constructor(private publicidadService: PublicidadService,
    private router: Router,
    private spinner: NgxSpinnerService,
     private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getAllPublicidad();
  }
  getAllPublicidad(){
    this.publicidadService.getAllPublicidad().subscribe(
      (data) => {
        this.publicidadLista = data
        console.log(this.publicidadLista)
      }
    );
  }
  //nos muestra la imagen despues de selecioanr
  onFileChange(event){
    this.publicidad = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.publicidadMin = evento.target.result;
  };
  fr.readAsDataURL(this.publicidad);
}

onUpload(): void{
  this.publicidadService.upload(this.publicidad).subscribe(
    data => {
      this.spinner.hide();
    
    },
    err => {
      alert(err.error.mensaje);
      this.spinner.hide();
      this.reset();
    }
  )
}
reset(): void{
  this.publicidad = null;
  this.publicidadMin = null;
  this.publicidadFile.nativeElement.value = '';
}
borrar(idpublicidad: number): void {
this.spinner.show();
this.publicidadService.delete(idpublicidad).subscribe(
  data =>{
    this.spinner.hide();
    this.cargarImagenes();
  },
  err => {
    this.spinner.hide();
  }
)
}
cargarImagenes(): void {
this.publicidadService.list().subscribe(
data => {
  this.publicidadLista = data;
}
);
}
}
