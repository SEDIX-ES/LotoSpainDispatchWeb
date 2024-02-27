import { Router } from '@angular/router';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { CardsjuegosComponent } from './cardsjuegos/cardsjuegos.component';
import { resultadoLoteria } from '../models/resultadoLoteria';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
})
export class ConsultasComponent {
  @Output() redirectToHome = new EventEmitter<void>();
  @ViewChild(CardsjuegosComponent) childComponent:
    | CardsjuegosComponent
    | undefined;
  mostraboton: boolean = true;
  filterText: string = '';
  fecha!: Date;
  resultadosInfo!: resultadoLoteria;

  constructor(private el: ElementRef, private router: Router) {}

  ubicacion() {
    // Redirige a la página de inicio
    this.router.navigateByUrl('/home').then(() => {
      // Espera a que se complete la navegación y luego realiza el desplazamiento
      const element = this.el.nativeElement.querySelector('#contactoSeccion');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  onFilterChanged(filterText: string) {
    this.filterText = filterText;
  }

  onDateSelected(event: Date) {
    this.fecha = event;
    if (event == null) {
      this.mostraboton = false;
    }

    this.updateBtnIsActive();
  }

  updateBtnIsActive() {
    this.childComponent?.toggleBtn(this.mostraboton);
  }

  onRespuestaResultado(datos: any) {
    this.resultadosInfo = datos;
    console.log(datos);
  }
}
