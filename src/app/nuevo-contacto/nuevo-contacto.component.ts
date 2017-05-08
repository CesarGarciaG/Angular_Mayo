import { Component } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';


@Component({
    template: `
        <formulario-contacto (formAceptado)="guardarContacto($event)"></formulario-contacto>
    `
})
export class NuevoContactoComponent {

    constructor(private _contactosService: ContactosService){}

    guardarContacto(contacto: Contacto) {
        console.log('Entro por aquí');
        this._contactosService.addContacto(contacto).subscribe((contacto) => {
            // this.listaContactos.push(contacto);
            alert('Creado');
        });
    }   
}