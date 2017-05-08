import { Component, OnInit } from '@angular/core';
import { Contacto } from './entidades/contacto';
import { ContactosService } from './servicios/contactos.service';

// interface Coche {
//   ruedas: number;
//   pegatinas?: string[]; // ? = Propiedad opcional
// }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  // Mi cronómetro :)
  name: string = 'olleH';
  cs: number = 0;
  secs: number = 0;
  secsFormat: string = '00';
  min: number = 0;
  numeroSuerte: number = 77;

  listaContactos: Contacto[];
  contactoSelec: Contacto;

  constructor(private _contactosService: ContactosService) {
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

  ngOnInit() {
    this._contactosService.getContactos().subscribe((contactos) => {
      this.listaContactos = contactos;
    });
  }

  showDetails(contacto: Contacto) {
    this.contactoSelec = contacto;
  }

  navegarRuta(ruta: string) {
    console.log('Navegando a', ruta);
    window.open(ruta, '_blank');
  }

  guardarContacto(contacto: Contacto) {
    this._contactosService.addContacto(contacto).subscribe((contacto) => {
        this.listaContactos.push(contacto);
    });
  }
}
