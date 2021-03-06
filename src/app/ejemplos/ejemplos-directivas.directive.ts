import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[EjemplosDirectivasAtributo]'
})

export class EjemplosDirectivasAtributoDirective {

    // Con Renderer establecemos los atributos del elemento, en el cual
    // está situada la directiva.
    // El elemento en cuestión lo obtenemos con:
    // ElementRef.nativeElement
    constructor(
        private _elemRef: ElementRef,
        private _renderer: Renderer
    ) {}

    @HostListener('mouseenter')
    ponerEstilo() {
        this.cambiarEstilo(true);
    }

    @HostListener('mouseleave')
    quitarEstilo() {
        this.cambiarEstilo(false);
    }

    cambiarEstilo(activo: boolean) {
        this._renderer.setElementStyle(this._elemRef.nativeElement, 'font-weight', activo ? 'bold' : 'normal');
        this._renderer.setElementStyle(this._elemRef.nativeElement, 'background-color', activo ? 'blue' : 'white');
        this._renderer.setElementStyle(this._elemRef.nativeElement, 'color', activo ? 'white' : 'black');
    }

}