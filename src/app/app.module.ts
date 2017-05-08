import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ContactosService } from './servicios/contactos.service';
import { ContactosResolve } from './servicios/contactos-resolve.service';

// Ejemplos
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent } from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';
import { EjemplosInyeccionComponent, Servicio1, Servicio2Provider } from './ejemplos/ejemplos-inyeccion.component';



@NgModule({
  imports: [      // Todos los módulos que necesita mi app
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],  
  declarations: [ // Componentes, directivas y pipes
    AppComponent,
    ListaContactosComponent,
    DetallesContactoComponent,
    FormularioContactoComponent,
    MisContactosComponent,
    NuevoContactoComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    EjemplosInyeccionComponent
  ],   
  providers: [    // Servicios
    ContactosService,
    ContactosResolve,
    Servicio1, // @Injectable
    Servicio2Provider // No @Injectable, se incluye el provider en su lugar
  ],  
  bootstrap: [    // Componente raiz de la app
    AppComponent
  ]    
})
export class AppModule { }
