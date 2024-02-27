import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss', './queries/buscador.component-mobile.scss']
})
export class BuscadorComponent {


  @Output() textChange = new EventEmitter<string>();
  busqueda: string = '';

  onInputChange() {
    this.textChange.emit(this.busqueda);
  }
}
