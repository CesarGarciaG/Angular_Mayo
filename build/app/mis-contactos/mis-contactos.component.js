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
var contactos_service_1 = require("../servicios/contactos.service");
var MisContactosComponent = (function () {
    function MisContactosComponent(_contactosService) {
        this._contactosService = _contactosService;
    }
    MisContactosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactosService.getContactos().subscribe(function (contactos) {
            _this.listaContactos = contactos;
        });
    };
    MisContactosComponent.prototype.showDetails = function (contacto) {
        this.contactoSelec = contacto;
    };
    MisContactosComponent.prototype.navegarRuta = function (ruta) {
        console.log('Navegando a', ruta);
        window.open(ruta, '_blank');
    };
    return MisContactosComponent;
}());
MisContactosComponent = __decorate([
    core_1.Component({
        templateUrl: './mis-contactos.component.html'
    }),
    __metadata("design:paramtypes", [contactos_service_1.ContactosService])
], MisContactosComponent);
exports.MisContactosComponent = MisContactosComponent;
//# sourceMappingURL=mis-contactos.component.js.map