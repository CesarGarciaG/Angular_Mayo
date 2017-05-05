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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var contacto_1 = require("../entidades/contacto");
var ContactosService = (function () {
    // private _contactos: Contacto[] = [
    //     Contacto.fromJSON({
    //         id: 1,
    //         nombre: 'Steve',
    //         apellidos: 'Dogs',
    //         email: 'steve.dogs@bone.com',
    //         telefono: '123212321',
    //         twitter: 'stevedoge',
    //         facebook: 'stevedogs',
    //         foto: ''
    //     }),
    //     Contacto.fromJSON({
    //         id: 2,
    //         nombre: 'Bill',
    //         apellidos: 'Quacks',
    //         email: 'bill.quacks@patosoft.com',
    //         telefono: '000000000',
    //         twitter: 'billquacks',
    //         facebook: 'billquacks',
    //         foto: ''
    //     }),
    //     Contacto.fromJSON({
    //         id: 3,
    //         nombre: 'Elon',
    //         apellidos: 'Moose',
    //         email: 'elon.moose@hoovesla.com',
    //         telefono: '101101010100101010000101010100100011000101',
    //         twitter: 'mooselon',
    //         facebook: 'elonmoose',
    //         foto: ''
    //     })
    // ];
    function ContactosService(_http) {
        this._http = _http;
    }
    ContactosService.prototype.getContactos = function () {
        return this._http
            .get('http://localhost:3004/contactos')
            .map(function (res) {
            // Obtengo la lista de objetos que está en el body
            var lista = res.json();
            // Creo una lista de contactos y la devuelvo
            lista.map(function (elem) {
                return contacto_1.Contacto.fromJSON(elem);
            });
            return lista;
        });
    };
    ContactosService.prototype.addContacto = function (contacto) {
        return this._http
            .post('http://localhost:3004/contactos', contacto)
            .map(function (res) {
            return contacto_1.Contacto.fromJSON(res.json());
        });
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map