import { Component, OnInit } from '@angular/core';
import { CantidadInterface } from '../models/cantidad.interface';
import { BotesService } from '../services/botes.service';
import { BoteInterface } from '../models/bote.interface';

@Component({
  selector: 'app-botes',
  templateUrl: './botes.component.html',
  styleUrls: [
    './botes.component.scss',
    './queries/botes.component-mobile.scss',
  ],
})
export class BotesComponent implements OnInit {
  ultimosBotes!: BoteInterface[];
  millones:boolean[]=[false,false,false,false,false,false,false,false,false,false,];

  constructor(private _botes: BotesService) {}

  ngOnInit(): void {
    this.obtenerBotes();
  }

  obtenerBotes() {
    this._botes.getUltimos().subscribe({
      next: (res: any) => {
        this.ultimosBotes = res;
        console.log(this.ultimosBotes);
      },
      error: (err) => {
        console.log('Error al obtener los botes', err);
      },
      complete: () => {},
    });
  }


  esFechaAnterior(fecha: Date): boolean {
    const fechaActual: Date = new Date();
    const fechaBote = new Date(fecha);

    // Crear nuevas fechas solo con año, mes y día
    const fechaActualSinHora: Date = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth(),
      fechaActual.getDate()
    );
    const fechaSinHora: Date = new Date(
      fechaBote.getFullYear(),
      fechaBote.getMonth(),
      fechaBote.getDate()
    );

    // Comparar solo el día
    if (fechaSinHora < fechaActualSinHora) {
      return true;
    } else {
      return false;
    }
  }

  sonMillones(cantidad:number, indice:number):number{
    if(cantidad/1000000>1){
      this.millones[indice]=true;
      return cantidad/1000000;
    }else{
      return cantidad;
    }
  }
}
