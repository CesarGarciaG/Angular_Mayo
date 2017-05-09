import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Jsonp, URLSearchParams, RequestOptions, Response } from '@angular/http';

@Component({
    selector: 'ejemplos-observables',
    template: ''
})

export class EjemplosObservablesComponent {

    private _miObservable$: Observable<any> = Observable.create((observador: Observer<any>) => {
        // Con el observador puedo emitir valores, errores o decir que he terminado
        console.log('Emitimos...');
        observador.next('¡Holi!');
        observador.next('Sample text');

        // Emitimos un error
        // observador.error('Sa\' matao Paco');

        // Indicamos que hemos terminado de emitir
        observador.complete();
    });

    constructor() {
        this._miObservable$.subscribe(
            (dato) => {
                console.log(`Dato recibido desde el observable.next(): ${dato}`);
        },  (error) => {
                console.error(`Dato de error: ${error}`);
        },  () => {
                console.log(`Fin de la cita`);
        });
    }
}

// Ejemplo de observables con operadores
@Component({
    selector: 'ejemplos-observables-wiki',
    template: `
        <div>
            <input (input)="buscarWiki($event)"/>
            <ul>
                <li *ngFor="let resultado of suscripcionTexto | async ">
                    {{ resultado }}
                </li>
            </ul>
        </div>
    `
})

export class EjemplosObservablesWikiComponent implements OnDestroy {

    private _flujoTexto: Subject<string> = new Subject<string>();

    resultados: string[];
    // suscripcionTexto: Subscription;
    suscripcionTexto: any;


    constructor(private _jsonp: Jsonp) {
        this.suscripcionTexto = this._flujoTexto
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((palabra: string) => {
                // console.log('Dato:', palabra);
                return this.peticionBusqueda(palabra);
            })
            // .subscribe((resultados) => {
            //     this.resultados = resultados;
            // });
    }

    ngOnDestroy() {
        // Nos desuscribimos del observable
        this.suscripcionTexto.unsubscribe();
    }

    buscarWiki(evento: KeyboardEvent) {
        // Hacemos emisión de evento
        console.log('Evento:', evento);
        const datoEmitido = (evento.target as HTMLInputElement).value;
        this._flujoTexto.next(datoEmitido);
    }

    peticionBusqueda(palabra: string): Observable<any> {
        const params: URLSearchParams = new URLSearchParams();
        params.set('search', palabra);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        let opciones: RequestOptions = new RequestOptions();
        opciones.search = params;

        return this._jsonp
            .get('http://en.wikipedia.org/w/api.php', opciones)
            .map((res: Response) => {
                console.info(res.json());
                return res.json()[1];
            })
    }
}