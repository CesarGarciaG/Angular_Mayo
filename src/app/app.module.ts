import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { ContactosService } from './servicios/contactos.service';
import { ContactosResolve } from './servicios/contactos-resolve.service';
import { ProvDirecciones } from './config/direcciones';

// Ejemplos
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent } from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';
import { EjemplosInyeccionComponent, Servicio1, Servicio2Provider } from './ejemplos/ejemplos-inyeccion.component';
import { EjemplosObservablesComponent, EjemplosObservablesWikiComponent } from './ejemplos/ejemplos-observables.component';
import { EjemplosPipeComponent } from './ejemplos/ejemplos-pipe.component';
import { EjemplosDirectivasComponent } from './ejemplos/ejemplos-directivas.component';
import { EjemplosDirectivasAtributoDirective } from './ejemplos/ejemplos-directivas.directive';




@NgModule({
  imports: [      // Todos los módulos que necesita mi app
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    AppRoutingModule
  ],  
  declarations: [ // Componentes, directivas y pipes
    AppComponent,
    ListaContactosComponent,
    DetallesContactoComponent,
    FormularioContactoComponent,
    MisContactosComponent,
    NuevoContactoComponent,
    OrdenarPipe,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    EjemplosInyeccionComponent,
    EjemplosObservablesComponent,
    EjemplosObservablesWikiComponent,
    EjemplosPipeComponent,
    EjemplosDirectivasComponent,
    EjemplosDirectivasAtributoDirective
  ],   
  providers: [    // Servicios
    ContactosService,
    ContactosResolve,
    ProvDirecciones,
    Servicio1, // @Injectable
    Servicio2Provider // No @Injectable, se incluye el provider en su lugar
  ],  
  bootstrap: [    // Componente raiz de la app
    AppComponent
  ]    
})
export class AppModule { }
