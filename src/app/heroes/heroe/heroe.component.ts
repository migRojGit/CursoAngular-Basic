import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Superman';
    edad: number = 45;

    get nombreCapitalizado(): string{
      return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string{
      return `${ this.nombre } - ${ this.edad} `;
    }

    cambiarNombre(): void {
      if(this.nombre == 'Superman'){
        this.nombre = 'Batman'
      }else{
        this.nombre = 'Superman'
      }
    }

    cambiarEdad(): void {
      if(this.edad == 45){
        this.edad = 50;
      }else{
        this.edad = 45;
      }
    }

    // set heroeNuevo( nombre: string, edad: number): [string, number]{
    //   let heroe = new HeroeComponent();


    // }
}

