import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PaginaComponent } from './pages/pagina/pagina.component';


const routes: Routes = [
  { path: '', redirectTo: '/pagina', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
{path: 'pagina', component: PaginaComponent},
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
