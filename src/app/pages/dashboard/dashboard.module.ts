import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { VacanteComponent } from './components/vacante/vacante.component';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { DetalleConvoComponent } from './components/detalle-convo/detalle-convo.component';
import { PublicaranuncioComponent } from './components/publicaranuncio/publicaranuncio.component';
import { SolicitarconvenioComponent } from './components/solicitarconvenio/solicitarconvenio.component';
import { NotificarconvocatoriaComponent } from './components/notificarconvocatoria/notificarconvocatoria.component';

@NgModule({
  declarations: [DashboardComponent, InicioComponent, VacanteComponent, ConvenioComponent, DetalleConvoComponent, PublicaranuncioComponent, SolicitarconvenioComponent, NotificarconvocatoriaComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
