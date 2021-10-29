import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
    styleUrls: ['../../app.component.css']
})
export class ListadoComponent  {

  heroes : string[] = ['Batman', 'Superman', 'Acuaman', 'Mujer Maravilla', 'BatWoman'];
  // heroeB : string | undefined =''; //en primera instancia lo tipeé string | undefined para poder asignarle el resultado de la función shift del arreglo
  heroeB : string = ''; //en segunda instancia, se agrega operador or (||) a la llamada a la función shift del arreglo
 
  borrarHeroe(){
    console.log('Borrando...');

    // primer intento: borré el último elemento de la lista al reducir la longitud del arreglo
    // if (this.heroes.length > 0)
    //   this.heroes.length = this.heroes.length - 1;

    this.heroeB = this.heroes.shift() || '';
  }
}
