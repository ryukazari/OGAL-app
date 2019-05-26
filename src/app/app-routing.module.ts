import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { LoginComponent } from './components/login/login.component';
import { RegistrarExpedienteComponent } from './components/registrar-expediente/registrar-expediente.component';
import { DetalleExpedienteComponent } from './components/detalle-expediente/detalle-expediente.component';
import { ListarExpedienteComponent } from './components/listar-expediente/listar-expediente.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { SolicitarInformacionComponent } from './components/solicitar-informacion/solicitar-informacion.component';
import { BuscarExpedienteComponent } from './components/buscar-expediente/buscar-expediente.component';
const routes: Routes = [
  //change redirectTo -> login
  { path: '', redirectTo: 'home', data: { title: 'First Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: { title: 'First Component' },
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'home', component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'listar-expedientes', pathMatch: 'full' },
      { path: 'listar-expedientes', component: ListarExpedienteComponent },
      { path: 'registrar-expedientes', component: RegistrarExpedienteComponent },
      { path: 'detalle-expediente/:numero', component: DetalleExpedienteComponent },
      { path: 'solicitar-informacion', component: SolicitarInformacionComponent },
      { path: 'buscar-expediente', component: BuscarExpedienteComponent }
    ]
  },
  //{ path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
