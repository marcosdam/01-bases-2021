import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  nombre: string = 'Spiderman';
  edad: number = 30;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarNombre(): void {
    this.nombre = 'Deadpool';
  }

  cambiarEdad(): void {
    this.edad = 50;
  }

}
