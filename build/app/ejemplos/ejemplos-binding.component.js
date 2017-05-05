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
var EjemplosBindingComponent = (function () {
    function EjemplosBindingComponent() {
        this.name = 'olleH';
        // Binding de propiedades
        this.textAreaRows = 6;
        // Binding de clases
        this.pintaClase = true;
        this.clases = { uno: false, dos: true };
        // Binding bidireccional
        this.mensaje = '¡Buenas noches!';
    }
    EjemplosBindingComponent.prototype.getColor = function () {
        return 'green';
    };
    EjemplosBindingComponent.prototype.getStyles = function () {
        return {
            color: 'white',
            backgroundColor: 'orange'
        };
    };
    EjemplosBindingComponent.prototype.showMsg = function () {
        alert('HOLI!!!');
    };
    return EjemplosBindingComponent;
}());
EjemplosBindingComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-binding',
        templateUrl: '/app/ejemplos/ejemplos-binding.component.html',
        styles: ["\n    .caja {\n      width: 50px;\n      height: 50px;\n      background-color: cyan;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], EjemplosBindingComponent);
exports.EjemplosBindingComponent = EjemplosBindingComponent;
//# sourceMappingURL=ejemplos-binding.component.js.map