import { Component, OnInit } from '@angular/core';
import { Contacto } from './entidades/contacto';
import { ContactosService } from './servicios/contactos.service';

// interface Coche {
//   ruedas: number;
//   pegatinas?: string[]; // ? = Propiedad opcional
// }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Mi cronómetro :)
  name: string = 'olleH';
  cs: number = 0;
  secs: number = 0;
  secsFormat: string = '00';
  min: number = 0;
  numeroSuerte: number = 77;

 

  constructor() {
    // Inicializamos el cronómetro (opcional, pero queda chulo ^^)
    setInterval(() => {
      this.cs++;
      if(this.cs == 10) {
        this.cs = 0;
        this.secs++;
        this.secsFormat = ("0" + this.secs).slice(-2);
        if(this.secs == 60) {
          this.secs = 0;
          this.secsFormat = '00';
          this.min++;
        }
      }
    }, 100);
  }
}
