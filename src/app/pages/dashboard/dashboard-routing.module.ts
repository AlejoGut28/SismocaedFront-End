import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VacanteComponent } from './components/vacante/vacante.component';
import { ConvenioComponent } from './components/convenio/convenio.component';
import { DetalleConvoComponent }   from './components/detalle-convo/detalle-convo.component';
import { PublicaranuncioComponent } from './components/publicaranuncio/publicaranuncio.component';
import { SolicitarconvenioComponent } from './components/solicitarconvenio/solicitarconvenio.component';
import { NotificarconvocatoriaComponent } from './components/notificarconvocatoria/notificarconvocatoria.component';
import { LoginComponent } from '../login/login.component';
import { ClasGuardService } from 'src/app/guards/clas-guard.service';


const routesHome: Routes = [
  {path:'', redirectTo:'',pathMatch:'full'},
  {path: 'login', component: LoginComponent, redirectTo: 'login'}
];

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'vacante', component: VacanteComponent },
      { path: 'convenio', component: ConvenioComponent },
      { path: 'detalle-convo', component: DetalleConvoComponent },
      { path: 'publicar-anuncio', component: PublicaranuncioComponent},
      { path: 'solicitar-convenio', component: SolicitarconvenioComponent},
      { path: 'notificar-convocatoria', component: NotificarconvocatoriaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
