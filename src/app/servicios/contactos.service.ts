import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contacto } from '../entidades/contacto';
import { Direcciones } from '../config/direcciones';

@Injectable()
export class ContactosService {

    // private _contactos: Contacto[] = [
    //     Contacto.fromJSON({
    //         id: 1,
    //         nombre: 'Steve',
    //         apellidos: 'Dogs',
    //         email: 'steve.dogs@bone.com',
    //         telefono: '123212321',
    //         twitter: 'stevedoge',
    //         facebook: 'stevedogs',
    //         foto: ''
    //     }),
    //     Contacto.fromJSON({
    //         id: 2,
    //         nombre: 'Bill',
    //         apellidos: 'Quacks',
    //         email: 'bill.quacks@patosoft.com',
    //         telefono: '000000000',
    //         twitter: 'billquacks',
    //         facebook: 'billquacks',
    //         foto: ''
    //     }),
    //     Contacto.fromJSON({
    //         id: 3,
    //         nombre: 'Elon',
    //         apellidos: 'Moose',
    //         email: 'elon.moose@hoovesla.com',
    //         telefono: '101101010100101010000101010100100011000101',
    //         twitter: 'mooselon',
    //         facebook: 'elonmoose',
    //         foto: ''
    //     })
    // ];

    constructor(
        private _http: Http,
        @Inject(Direcciones) private _direcciones: any
    ) {}

    // Recuperamos la lista de contactos del servidor (GET)
    getContactos(): Observable<Contacto[]> {
        return this._http
            .get(`${this._direcciones.servidor}/contactos`)
            .map((res) => {
                // Obtengo la lista de objetos que está en el body
                const lista: any[] = res.json();
                // Creo una lista de contactos y la devuelvo
                return lista.map((elem) => {
                    return Contacto.fromJSON(elem);
                });
            });
    }

    // Creamos un contacto en el servidor (POST)
    addContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
            .post(`${this._direcciones.servidor}/contactos`, contacto)
            .map((res) => {
                return Contacto.fromJSON(res.json());
            });
    }

    // Eliminamos un contacto del servidor (DELETE)
    deleteContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
            .delete(`${this._direcciones.servidor}/contactos/${contacto.id}`)
            .map((res) => {
                return Contacto.fromJSON(res.json());
            });
    }

    // Editamos un contacto en el servidor (PUT)
    editContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
            .put(`${this._direcciones.servidor}/contactos/${contacto.id}`, contacto)
            .map((res) => {
                return Contacto.fromJSON(res.json());
            });
    }

    generarRutaFoto(): Observable<string> {
        // http://faker.hook.io/?property=image.avatar
        return this._http
            .get(this._direcciones.faker)
            .map((res) => {
                let rutaFoto = res.text();
                rutaFoto = rutaFoto.replace(new RegExp('\"', 'g'), '');
                // console.log(rutaFoto);
                return rutaFoto;
            })
    }

}