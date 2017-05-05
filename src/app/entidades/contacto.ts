// Representa una entidad contacto
export class Contacto {

    // Método estático (de la clase Contacto)
    static fromJSON(json: any): Contacto {
        return new Contacto(
            json.id,
            json.nombre,
            json.apellidos,
            json.email,
            json.telefono,
            json.twitter,
            json.facebook,
            json.foto || ''
        );
    }

    constructor(
        public id: number,
        public nombre: string,
        public apellidos: string,
        public email: string,
        public telefono: string,
        public twitter: string,
        public facebook: string,
        public foto: string
    ) {}

    // Método de instancia (lo tienen todas las instancias de Contacto)
    generarRutaFB(): string {
        return this.facebook ? `https://facebook.com/${this.facebook}` : null;
    }

    generarRutaTW(): string {
        return this.twitter ? `https://twitter.com/${this.twitter}` : null;
    }
}