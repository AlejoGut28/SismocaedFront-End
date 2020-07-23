import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VacanteComponent } from './components/vacante/vacante.component';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { DetalleConvoComponent }   from './components/detalle-convo/detalle-convo.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'vacante', component: VacanteComponent },
      { path: 'convenio', component: ConvenioComponent },
      { path: 'detalle-convo', component: DetalleConvoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
