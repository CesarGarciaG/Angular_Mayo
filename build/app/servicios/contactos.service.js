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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var contacto_1 = require("../entidades/contacto");
var direcciones_1 = require("../config/direcciones");
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
    function ContactosService(_http, _direcciones) {
        this._http = _http;
        this._direcciones = _direcciones;
    }
    // Recuperamos la lista de contactos del servidor (GET)
    ContactosService.prototype.getContactos = function () {
        return this._http
            .get(this._direcciones.servidor + "/contactos")
            .map(function (res) {
            // Obtengo la lista de objetos que está en el body
            var lista = res.json();
            // Creo una lista de contactos y la devuelvo
            return lista.map(function (elem) {
                return contacto_1.Contacto.fromJSON(elem);
            });
        }); //}).share(); (opcional)
    };
    // Creamos un contacto en el servidor (POST)
    ContactosService.prototype.addContacto = function (contacto) {
        return this._http
            .post(this._direcciones.servidor + "/contactos", contacto)
            .map(function (res) {
            return contacto_1.Contacto.fromJSON(res.json());
        });
    };
    // Eliminamos un contacto del servidor (DELETE)
    ContactosService.prototype.deleteContacto = function (contacto) {
        return this._http
            .delete(this._direcciones.servidor + "/contactos/" + contacto.id)
            .map(function (res) {
            return contacto_1.Contacto.fromJSON(res.json());
        });
    };
    // Editamos un contacto en el servidor (PUT)
    ContactosService.prototype.editContacto = function (contacto) {
        return this._http
            .put(this._direcciones.servidor + "/contactos/" + contacto.id, contacto)
            .map(function (res) {
            return contacto_1.Contacto.fromJSON(res.json());
        });
    };
    ContactosService.prototype.generarRutaFoto = function () {
        // http://faker.hook.io/?property=image.avatar
        return this._http
            .get(this._direcciones.faker)
            .map(function (res) {
            var rutaFoto = res.text();
            rutaFoto = rutaFoto.replace(new RegExp('\"', 'g'), '');
            // console.log(rutaFoto);
            return rutaFoto;
        });
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(direcciones_1.Direcciones)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map