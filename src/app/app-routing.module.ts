import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ClasGuardService as Guard} from './guards/clas-guard.service';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: PaginaComponent},
  { path: 'login', component: LoginComponent },
  { path: 'pagina', component: PaginaComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
