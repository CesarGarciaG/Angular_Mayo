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
var FormularioContactoComponent = (function () {
    function FormularioContactoComponent() {
        this.formAceptado = new core_1.EventEmitter();
    }
    FormularioContactoComponent.prototype.notificarContacto = function (contactoForm) {
        // console.log(contactoForm);
        var contacto = contacto_1.Contacto.fromJSON(contactoForm.value);
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
        templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
        styleUrls: ['app/formulario-contacto/formulario-contacto.component.css']
    })
], FormularioContactoComponent);
exports.FormularioContactoComponent = FormularioContactoComponent;
//# sourceMappingURL=formulario-contacto.component.js.map