import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Pipe({ name: 'ordenar' })

export class OrdenarPipe implements PipeTransform {
    // Con 'transform' creamos un nuevo dato y lo devolvemos (sin alterar el original)
    transform(contactos: Contacto[]) {
        contactos.sort((contacto1, contacto2): number => {
            const nombreCompleto1 = `${contacto1.nombre} ${contacto1.apellidos}`;
            const nombreCompleto2 = `${contacto2.nombre} ${contacto2.apellidos}`;

            // Si 1 > 2 => return 1
            if(nombreCompleto1 > nombreCompleto2) return 1;
            // Si 1 < 2 => return -1
            else if(nombreCompleto1 < nombreCompleto2) return -1;
            // Si 1 = 2 => return 0
            else return 0;
        });
        return contactos;
    }
}