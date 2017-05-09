"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var http_1 = require("@angular/http");
var EjemplosObservablesComponent = (function () {
    function EjemplosObservablesComponent() {
        this._miObservable$ = Observable_1.Observable.create(function (observador) {
            // Con el observador puedo emitir valores, errores o decir que he terminado
            console.log('Emitimos...');
            observador.next('¡Holi!');
            observador.next('Sample text');
            // Emitimos un error
            // observador.error('Sa\' matao Paco');
            // Indicamos que hemos terminado de emitir
            observador.complete();
        });
        this._miObservable$.subscribe(function (dato) {
            console.log("Dato recibido desde el observable.next(): " + dato);
        }, function (error) {
            console.error("Dato de error: " + error);
        }, function () {
            console.log("Fin de la cita");
        });
    }
    return EjemplosObservablesComponent;
}());
EjemplosObservablesComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-observables',
        template: ''
    }),
    __metadata("design:paramtypes", [])
], EjemplosObservablesComponent);
exports.EjemplosObservablesComponent = EjemplosObservablesComponent;
// Ejemplo de observables con operadores
var EjemplosObservablesWikiComponent = (function () {
    function EjemplosObservablesWikiComponent(_jsonp) {
        var _this = this;
        this._jsonp = _jsonp;
        this._flujoTexto = new Subject_1.Subject();
        this.suscripcionTexto = this._flujoTexto
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (palabra) {
            // console.log('Dato:', palabra);
            return _this.peticionBusqueda(palabra);
        });
        // .subscribe((resultados) => {
        //     this.resultados = resultados;
        // });
    }
    EjemplosObservablesWikiComponent.prototype.ngOnDestroy = function () {
        // Nos desuscribimos del observable
        this.suscripcionTexto.unsubscribe();
    };
    EjemplosObservablesWikiComponent.prototype.buscarWiki = function (evento) {
        // Hacemos emisión de evento
        console.log('Evento:', evento);
        var datoEmitido = evento.target.value;
        this._flujoTexto.next(datoEmitido);
    };
    EjemplosObservablesWikiComponent.prototype.peticionBusqueda = function (palabra) {
        var params = new http_1.URLSearchParams();
        params.set('search', palabra);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        var opciones = new http_1.RequestOptions();
        opciones.search = params;
        return this._jsonp
            .get('http://en.wikipedia.org/w/api.php', opciones)
            .map(function (res) {
            console.info(res.json());
            return res.json()[1];
        });
    };
    return EjemplosObservablesWikiComponent;
}());
EjemplosObservablesWikiComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-observables-wiki',
        template: "\n        <div>\n            <input (input)=\"buscarWiki($event)\"/>\n            <ul>\n                <li *ngFor=\"let resultado of suscripcionTexto | async \">\n                    {{ resultado }}\n                </li>\n            </ul>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Jsonp])
], EjemplosObservablesWikiComponent);
exports.EjemplosObservablesWikiComponent = EjemplosObservablesWikiComponent;
//# sourceMappingURL=ejemplos-observables.component.js.map