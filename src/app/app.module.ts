// ----------------------- Imports - Angular ------------------------------- //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from "./core-angular-material/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
//EXTRAS
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';

// -------------------------- Componentes --------------------------------- //
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { ListarExpedienteComponent } from './components/listar-expediente/listar-expediente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { RegistrarExpedienteComponent } from './components/registrar-expediente/registrar-expediente.component';
import { DetalleExpedienteComponent } from './components/detalle-expediente/detalle-expediente.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SolicitarInformacionComponent } from './components/solicitar-informacion/solicitar-informacion.component';
import { BuscarExpedienteComponent } from './components/buscar-expediente/buscar-expediente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListarExpedienteComponent,
    NavbarComponent,
    NavigationComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    RegistrarExpedienteComponent,
    DetalleExpedienteComponent,
    SolicitarInformacionComponent,
    BuscarExpedienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
