import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-binding',
    templateUrl: '/app/ejemplos/ejemplos-binding.component.html',
    styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: cyan;
    }
  `]
})

export class EjemplosBindingComponent {
    name: string = 'olleH';

    // Binding de propiedades
    textAreaRows: number = 6;

    // Binding de clases
    pintaClase: boolean = true;
    clases: any = { uno: false, dos: true };

    // Binding bidireccional
    mensaje: string = '¡Buenas noches!';

    constructor() {
        
    }

    getColor(): string {
        return 'green';
    }

    getStyles(): any {
        return {
        color: 'white',
        backgroundColor: 'orange'
        };
    }

    showMsg() {
        alert('HOLI!!!');
    }
}