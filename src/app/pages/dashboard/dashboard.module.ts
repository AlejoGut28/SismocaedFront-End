import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {NgxPaginationModule} from 'ngx-pagination';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { VacanteComponent } from './components/vacante/vacante.component';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { DetalleConvoComponent } from './components/detalle-convo/detalle-convo.component';
import { PublicaranuncioComponent } from './components/publicaranuncio/publicaranuncio.component';
import { SolicitarconvenioComponent } from './components/solicitarconvenio/solicitarconvenio.component';
import { NotificarconvocatoriaComponent } from './components/notificarconvocatoria/notificarconvocatoria.component';


// external
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { LoginComponent } from '../login/login.component';
import { AppComponent } from 'src/app/app.component';
<<<<<<< HEAD
import { interceptorProvider } from 'src/app/interceptors/clas-interceptor.service';
=======
import { DocaprobadoComponent } from './components/docaprobado/docaprobado.component';
import { AprobadoComponent } from './components/aprobado/aprobado.component';
>>>>>>> f51c7f673182170f4fd358e1386ce349ef15b905

@NgModule({
  declarations: [
    DashboardComponent, 
    InicioComponent, 
    VacanteComponent, 
    ConvenioComponent,
    DetalleConvoComponent,
    PublicaranuncioComponent,
    SolicitarconvenioComponent,
    NotificarconvocatoriaComponent,
    DocaprobadoComponent,
    AprobadoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule,
    NgxSpinnerModule,
    NgxPaginationModule
  


    //BrowserModule
  ],
  entryComponents: [LoginComponent],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]

})
export class DashboardModule { }


