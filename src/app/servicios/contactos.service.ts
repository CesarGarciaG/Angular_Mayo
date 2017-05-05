import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {

    getContactos(): Contacto[] {
        return [
            Contacto.fromJSON({
                id: 1,
                nombre: 'Steve',
                apellidos: 'Dogs',
                email: 'steve.dogs@bone.com',
                telefono: '123212321',
                twitter: 'stevedoge',
                facebook: 'stevedogs',
                foto: ''
            }),
            Contacto.fromJSON({
                id: 2,
                nombre: 'Bill',
                apellidos: 'Quacks',
                email: 'bill.quacks@patosoft.com',
                telefono: '000000000',
                twitter: 'billquacks',
                facebook: 'billquacks',
                foto: ''
            }),
            Contacto.fromJSON({
                id: 3,
                nombre: 'Elon',
                apellidos: 'Moose',
                email: 'elon.moose@hoovesla.com',
                telefono: '101101010100101010000101010100100011000101',
                twitter: 'mooselon',
                facebook: 'elonmoose',
                foto: ''
            })
        ];
    }

}