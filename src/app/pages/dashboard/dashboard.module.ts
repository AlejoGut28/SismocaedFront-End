import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { VacanteComponent } from './components/vacante/vacante.component';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { DetalleConvoComponent } from './components/detalle-convo/detalle-convo.component';


@NgModule({
  declarations: [DashboardComponent, InicioComponent, VacanteComponent, ConvenioComponent, DetalleConvoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
