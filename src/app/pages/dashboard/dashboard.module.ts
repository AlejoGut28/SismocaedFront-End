import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { VacanteComponent } from './components/vacante/vacante.component';
import { ConvenioComponent } from './components/convenio/convenio.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    InicioComponent, 
    VacanteComponent, 
    ConvenioComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
