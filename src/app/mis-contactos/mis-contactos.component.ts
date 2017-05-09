import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';


@Component({
    templateUrl: './mis-contactos.component.html'
})
export class MisContactosComponent implements OnInit {

    listaContactos: Contacto[];
    contactoSelec: Contacto;

    constructor(private _contactosService: ContactosService, private _activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        // this._contactosService.getContactos().subscribe((contactos) => {
        //     this.listaContactos = contactos;
        // });

        // data representa al objeto del resolve (ver app-routing)
        this._activatedRoute.data.forEach((data: any) => {
            this.listaContactos = data.contactos;
        })
    }

    showDetails(contacto: Contacto) {
        this.contactoSelec = contacto;
    }

    navegarRuta(ruta: string) {
        console.log('Navegando a', ruta);
        window.open(ruta, '_blank');
    }

    eliminarContacto(contacto: Contacto) {
        if(confirm(`¿Seguro que quieres eliminar a ${contacto.nombre} ${contacto.apellidos}?`)) {
            this._contactosService.deleteContacto(contacto).subscribe(() => {
                console.log('Contacto eliminado');
                // Busco en contacto en la lista para eliminarlo
                const index = this.listaContactos.findIndex((c: Contacto) => {
                    return c.id === contacto.id;
                });
                if(index !== -1) {
                    // Lo eliminamos de la lista
                    this.listaContactos.splice(index, 1);
                    // Lo quitamos de seleccionado
                    this.contactoSelec = null;
                }
            })
            // console.log('waaaaah');
        }
    }
    
}