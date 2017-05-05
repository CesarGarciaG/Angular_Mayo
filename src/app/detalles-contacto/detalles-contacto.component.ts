import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'detalles-contacto',
    templateUrl: '/app/detalles-contacto/detalles-contacto.component.html',
    styleUrls: ['app/detalles-contacto/detalles-contacto.component.css']
})

export class DetallesContactoComponent {

    @Input() contacto: Contacto;
    @Output() verFB: EventEmitter<string> = new EventEmitter();
    @Output() verTW: EventEmitter<string> = new EventEmitter();

    notifyFB() {
        this.verFB.emit(this.contacto.generarRutaFB());
    }

    notifyTW() {
        this.verTW.emit(this.contacto.generarRutaTW());
    }

}