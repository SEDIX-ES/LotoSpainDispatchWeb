import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion1',
  templateUrl: './seccion1.component.html',
  styleUrls: [
    './seccion1.component.scss',
    './queries/seccion1.component-mobile.scss',
  ],
})
export class Seccion1Component implements OnInit {
  private numeroTelefono: string = '982560407';
  apertura: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.calcularApertura();
  }

  btnAction(event: string) {
    switch (event) {
      case 'Contactanos':
        window.open(`tel:${this.numeroTelefono}`, '_blank');
        break;

      case 'Consulta':
        this.router.navigate(['/consultas']);
        break;

      case 'Compra':
        this.router.navigate(['/compras']);
        break;

      default:
        break;
    }
  }

  calcularApertura() {
    var fecha: Date = new Date();
    var hoy: number = fecha.getDay();
    console.log(hoy);
    var horas = fecha.getHours();
    console.log(horas);
    var minutos = fecha.getMinutes();
    switch (hoy) {
      case 0:
        this.apertura = 'Abrirá mañana a las 9:30';
        console.log(this.apertura);
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        if (horas >= 13) {
          if (horas === 13 && minutos < 30) {
              this.apertura = 'Cerrará pronto, reabre a las 16:30';
          } else if (horas < 16) {
              this.apertura = 'Abrirá hoy a las 16:30';
          } else if (horas < 20) {
              this.apertura = 'Está abierto';
          } else {
              this.apertura = 'Abrirá mañana a las 9:30';
          }
      } else if (horas < 9 || (horas === 9 && minutos < 30)) {
          this.apertura = 'Abrirá hoy a las 9:30';
      } else {
          this.apertura = 'Está abierto';
      }
        console.log(this.apertura);
        break;
      case 6:
        if (horas >= 13) {
          this.apertura = 'Abrirá el lunes a las 9:30';
        } else if (horas < 9 || (horas === 9 && minutos < 30)) {
          this.apertura = 'Abrirá hoy a las 9:30';
        } else {
          this.apertura = 'Está abierto';
        }
        console.log(this.apertura);
        break;
    }
  }
}
