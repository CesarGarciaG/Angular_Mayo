import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';


@Component({
    templateUrl: './mis-contactos.component.html'
})
export class MisContactosComponent implements OnInit {

    listaContactos: Contacto[];
    contactoSelec: Contacto;

    constructor(private _contactosService: ContactosService) {}

    ngOnInit() {
        this._contactosService.getContactos().subscribe((contactos) => {
        this.listaContactos = contactos;
        });
    }

    showDetails(contacto: Contacto) {
        this.contactoSelec = contacto;
    }

    navegarRuta(ruta: string) {
        console.log('Navegando a', ruta);
        window.open(ruta, '_blank');
    }
    
}