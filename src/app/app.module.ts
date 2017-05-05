import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { ContactosService } from './servicios/contactos.service';

// Ejemplos
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent } from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';
import { EjemplosInyeccionComponent, Servicio1, Servicio2Provider } from './ejemplos/ejemplos-inyeccion.component';



@NgModule({
  imports: [      // Todos los módulos que necesita mi app
    BrowserModule,
    FormsModule,
    HttpModule
  ],  
  declarations: [ // Componentes, directivas y pipes
    AppComponent,
    ListaContactosComponent,
    DetallesContactoComponent,
    FormularioContactoComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    EjemplosInyeccionComponent
  ],   
  providers: [    // Servicios
    ContactosService,
    Servicio1, // @Injectable
    Servicio2Provider // No @Injectable, se incluye el provider en su lugar
  ],  
  bootstrap: [    // Componente raiz de la app
    AppComponent
  ]    
})
export class AppModule { }
