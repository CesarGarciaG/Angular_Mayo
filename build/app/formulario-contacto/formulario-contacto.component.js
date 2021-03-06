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
var contacto_1 = require("../entidades/contacto");
var contactos_service_1 = require("../servicios/contactos.service");
var FormularioContactoComponent = (function () {
    function FormularioContactoComponent(_contactosService) {
        this._contactosService = _contactosService;
        this.formAceptado = new core_1.EventEmitter();
        this.rutaFoto = '';
    }
    FormularioContactoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactosService.generarRutaFoto().subscribe(function (ruta) {
            _this.rutaFoto = ruta;
        });
    };
    FormularioContactoComponent.prototype.notificarContacto = function (contactoForm) {
        // console.log(contactoForm);
        var contacto = contacto_1.Contacto.fromJSON(contactoForm.value);
        contacto.foto = this.rutaFoto;
        this.formAceptado.emit(contacto);
    };
    return FormularioContactoComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FormularioContactoComponent.prototype, "formAceptado", void 0);
FormularioContactoComponent = __decorate([
    core_1.Component({
        selector: 'formulario-contacto',
        templateUrl: './formulario-contacto.component.html',
        styleUrls: ['./formulario-contacto.component.css']
    }),
    __metadata("design:paramtypes", [contactos_service_1.ContactosService])
], FormularioContactoComponent);
exports.FormularioContactoComponent = FormularioContactoComponent;
//# sourceMappingURL=formulario-contacto.component.js.map