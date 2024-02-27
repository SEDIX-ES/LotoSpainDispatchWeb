import { Component } from '@angular/core';
import { InterfazReview } from '../models/ReviewInterface';

@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.component.html',
  styleUrls: ['./seccion3.component.scss','./queries/seccion3.component-mobile.scss'],
})
export class Seccion3Component {
  data: InterfazReview[] = [
    {
      nombre: 'Jose Antonio',
      titulo: 'Muy buen trato',
      contenido: 'Me atendieron genial y con celeridad',
      avatar: '',
    },
    {
      nombre: 'Fernando',
      titulo: 'Amabilidad ante todo',
      contenido: 'Pregunté por un número específico y me atendieron genial',
      avatar: '',
    },
    {
      nombre: 'Mª Peregrina',
      titulo: 'Facilidad para encontrar lo que busco',
      contenido: 'Se encargaron de encontrar el numero que yo quería',
      avatar: '',
    },
    {
      nombre: 'Nuria',
      titulo: 'Muy buen trato',
      contenido: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      avatar: '',
    },
  ];

  dataSlice: InterfazReview[] = this.data.slice(0,2);
  index: number=0;

  showNext() {
    this.index += 2;
    if (this.index >= this.data.length) {
      this.index = 0;
    }
    this.updateVisibleItems();
  }

  showPrevious() {
    this.index -= 2;
    if (this.index < 0) {
      this.index = this.data.length - 2;
    }
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    this.dataSlice = this.data.slice(this.index, this.index + 2);
  }
}
