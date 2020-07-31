import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Publicidad } from 'src/app/models/Publicidad';
import { PublicidadService } from 'src/app/services/publicidad.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('publicidadInputFile', {static: false}) publicidadFile: ElementRef;


publicidades: Publicidad[]= [];

  constructor(private publicidadService: PublicidadService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal) { }

  ngOnInit(){
    this.cargarImagenes();
  }
  cargarImagenes(): void{
  this.publicidadService.list().subscribe(
      data =>{
        this.publicidades = data;
      }
    );
  }
borrar(id: number): void {
this.spinner.show();
this.publicidadService.delete(id).subscribe(
  data => {
    this.spinner.hide();
    this.cargarImagenes();
  },
  err => {
    this.spinner.hide();
    console.log(err);
  }
);
}
}
