"use strict";
// Representa una entidad contacto
var Contacto = (function () {
    function Contacto(id, nombre, apellidos, email, telefono, twitter, facebook, foto) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.twitter = twitter;
        this.facebook = facebook;
        this.foto = foto;
    }
    // Método estático (de la clase Contacto)
    Contacto.fromJSON = function (json) {
        return new Contacto(json.id, json.nombre, json.apellidos, json.email, json.telefono, json.twitter, json.facebook, json.foto || '');
    };
    // Método de instancia (lo tienen todas las instancias de Contacto)
    Contacto.prototype.generarRutaFB = function () {
        return this.facebook ? "https://facebook.com/" + this.facebook : null;
    };
    Contacto.prototype.generarRutaTW = function () {
        return this.twitter ? "https://twitter.com/" + this.twitter : null;
    };
    return Contacto;
}());
exports.Contacto = Contacto;
//# sourceMappingURL=contacto.js.map