import { Component, OnInit } from '@angular/core';
import { Publicidad } from 'src/app/models/Publicidad';
import { PublicidadService } from 'src/app/services/publicidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaranuncio',
  templateUrl: './publicaranuncio.component.html',
  styleUrls: ['./publicaranuncio.component.css']
})
export class PublicaranuncioComponent implements OnInit {

  public url: string;
  publi: Publicidad = new Publicidad();
  publicidadLista: Publicidad[] = [];
  Publicidad: Publicidad[];

  constructor(private publicidadService: PublicidadService,
    private router: Router,
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
}
