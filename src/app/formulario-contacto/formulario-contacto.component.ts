import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './formulario-contacto.component.html',
    styleUrls: ['./formulario-contacto.component.css']
})

export class FormularioContactoComponent implements OnInit {

    @Output() formAceptado: EventEmitter<Contacto> = new EventEmitter();
    rutaFoto: string = '';

    constructor(private _contactosService: ContactosService) {}

    ngOnInit() {
        this._contactosService.generarRutaFoto().subscribe((ruta) => {
            this.rutaFoto = ruta;
        });
    }

    notificarContacto(contactoForm: FormGroup) {
        // console.log(contactoForm);
        const contacto: Contacto = Contacto.fromJSON(contactoForm.value);
        contacto.foto = this.rutaFoto;
        this.formAceptado.emit(contacto);
    }

}