import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

  heroes: string[] = ['Superman', 'Batman', 'Aquaman', 'Mujer Maravilla', 'Linterna Verde'];
  heroeEliminado: string = '';

  borrarHeroe(){
    this.heroeEliminado = this.heroes.shift() || " " ;

  }

}
