import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contacto } from '../entidades/contacto';

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

    constructor(private _http: Http) {}

    getContactos(): Observable<Contacto[]> {
        return this._http
            .get('http://localhost:3004/contactos')
            .map((res) => {
                // Obtengo la lista de objetos que está en el body
                const lista: any[] = res.json();
                // Creo una lista de contactos y la devuelvo
                lista.map((elem) => {
                    return Contacto.fromJSON(elem);
                });
                return lista;
            });
    }

    addContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
            .post('http://localhost:3004/contactos', contacto)
            .map((res) => {
                return Contacto.fromJSON(res.json());
            });
    }

}