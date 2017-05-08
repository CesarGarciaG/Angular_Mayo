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
// interface Coche {
//   ruedas: number;
//   pegatinas?: string[]; // ? = Propiedad opcional
// }
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        // Mi cronómetro :)
        this.name = 'olleH';
        this.cs = 0;
        this.secs = 0;
        this.secsFormat = '00';
        this.min = 0;
        this.numeroSuerte = 77;
        // Inicializamos el cronómetro (opcional, pero queda chulo ^^)
        setInterval(function () {
            _this.cs++;
            if (_this.cs == 10) {
                _this.cs = 0;
                _this.secs++;
                _this.secsFormat = ("0" + _this.secs).slice(-2);
                if (_this.secs == 60) {
                    _this.secs = 0;
                    _this.secsFormat = '00';
                    _this.min++;
                }
            }
        }, 100);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map