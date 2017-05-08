import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './formulario-contacto.component.html',
    styleUrls: ['./formulario-contacto.component.css']
})

export class FormularioContactoComponent {

    @Output() formAceptado: EventEmitter<Contacto> = new EventEmitter();

    notificarContacto(contactoForm: FormGroup) {
        // console.log(contactoForm);
        const contacto: Contacto = Contacto.fromJSON(contactoForm.value);
        this.formAceptado.emit(contacto);
    }

}