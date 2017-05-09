import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-pipe',
    template: `
        <div>
            <strong>Pipa de fechas:</strong> {{ fecha | date:'dd/MM/yyyy' }}
            <strong>Pipa de moneda:</strong> {{ precio | currency:'EUR' }}
            <strong>Pipa de texto:</strong> {{ texto | titlecase }}
            <strong>Pipa de json:</strong> <pre>{{ objeto | json }}</pre>
        </div>
    `
})

export class EjemplosPipeComponent {
    
    fecha: Date = new Date();
    precio: number = 34.99;
    texto: string = 'hola muchachada';
    objeto: any = {
        selector: 'aaaaaa',
        asd: 'dsa',
        fecha: new Date()
    };

}