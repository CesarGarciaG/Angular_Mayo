import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';


@Component({
    template: `
        <formulario-contacto (formAceptado)="guardarContacto($event)"></formulario-contacto>
    `
})
export class NuevoContactoComponent {

    constructor(
        private _contactosService: ContactosService,
        private _router: Router
    ) {}

    guardarContacto(contacto: Contacto) {
        console.log('Entro por aquí');
        this._contactosService.addContacto(contacto).subscribe((contacto) => {
            // Navegamos a "Mis Contactos"
            this._router.navigate(['mis-contactos']);
        });
    }   
}