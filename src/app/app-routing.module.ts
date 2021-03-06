import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ContactosResolve } from './servicios/contactos-resolve.service';

// Definimos la colección de rutas de nuestra app

const rutas: Routes = [
    {
        path: 'mis-contactos',
        component: MisContactosComponent,
        // Antes de sacar esa página, cargamos la lista del servidor
        resolve: {
            contactos: ContactosResolve
        }
    },
    {
        path: 'nuevo-contacto',
        component: NuevoContactoComponent
    },
    {
        path: '**',
        redirectTo: '/mis-contactos'
    }
]

// Creamos un nuevo módulo de routing a partir de las rutas definidas
const moduloRutas = RouterModule.forRoot(rutas);

@NgModule({
    imports: [ moduloRutas ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}