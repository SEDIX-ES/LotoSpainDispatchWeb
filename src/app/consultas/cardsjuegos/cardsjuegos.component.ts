import { Component, EventEmitter, Input, Output } from '@angular/core';
import { resultadoLoteria } from '../../models/resultadoLoteria';
import { BuscarResultadosService } from '../../services/buscarResultados.service';

@Component({
  selector: 'app-cardsjuegos',
  templateUrl: './cardsjuegos.component.html',
  styleUrls: ['./cardsjuegos.component.scss','./queries/cardsjuegos.component-mobile.scss'],
})
export class CardsjuegosComponent {
  @Input() filterText: string = '';
  //decorador input que recibe datos
  @Input() fecha!: Date;
  //decorador output con emiter para enviar datos
  @Output() respuestaResultado = new EventEmitter<resultadoLoteria>();

  btnIsActive: boolean = false;

  cards = [
    {
      imageUrl: '../../../assets/Bonoloto.png',
      title: 'Bonoloto',
      buttonText: 'Consultar',
      backgroundColor: '#d1dba599',
      textColor: '#748525',
      btnColor: '#c5e49e',
      game_Id: 'BONO',
    },
    {
      imageUrl: '../../../assets/Logo_Euromillonespng.png',
      title: 'EuroMillones',
      buttonText: 'Consultar',
      backgroundColor: '#a5c8e1a3',
      textColor: '#03405f',
      btnColor: '#a5c8e1',
      game_Id: 'EMIL',
    },
    {
      imageUrl: '../../../assets/ElGordo.png',
      title: 'ElGordo',
      buttonText: 'Consultar',
      backgroundColor: '#ca676b99',
      textColor: '#be4147',
      btnColor: '#ca676b',
      game_Id: 'ELGR',
    },
    {
      imageUrl: '../../../assets/LaPrimitiva.png',
      title: 'LaPrimitiva',
      buttonText: 'Consultar',
      backgroundColor: '#62be8d99',
      textColor: '#098342',
      btnColor: '#62be8d',
      game_Id: 'LAPR',
    },
    {
      imageUrl: '../../../assets/Quiniela.png',
      title: 'Quiniela',
      buttonText: 'Consultar',
      backgroundColor: '#ee6d7099',
      textColor: '#cc1517',
      btnColor: '#ee6d70',
      game_Id: 'LAQU',
    },
    {
      imageUrl: '../../../assets/LoteriaNacional.png',
      title: 'Loteria Nacional',
      buttonText: 'Consultar',
      backgroundColor: '#73a9d799',
      textColor: '#3378b3',
      btnColor: '#73a9d7',
      game_Id: 'LNAC',
    },
  ];
  filteredCards: any[] = this.cards;

  constructor(private buscarResultadosService: BuscarResultadosService) {
    //inyeccion del servico que trae datos del api
  }

  ngOnChanges() {
    this.filteredCards = this.filterCardsByName();
  }

  private filterCardsByName(): any[] {
    if (!this.filterText) {
      // Si no hay texto de filtro, muestra todas las tarjetas
      return this.cards;
    }

    // Filtra las tarjetas según el texto de búsqueda
    const lowercaseFilterText = this.filterText.toLowerCase();
    return this.cards.filter((card) =>
      card.title.toLowerCase().includes(lowercaseFilterText)
    );
  }

  toggleBtn(event: boolean) {
    this.btnIsActive = event;
  }

  consultar(loteria: any) {
    const año: number = this.fecha.getFullYear();
    const mes: string = (this.fecha.getMonth() + 1).toString().padStart(2, '0'); // Agregar ceros iniciales si es necesario
    const dia: string = this.fecha.getDate().toString().padStart(2, '0'); // Agregar ceros iniciales si es necesario

    const fechaEnFormatoDeseado: string = `${año}${mes}${dia}`;

    this.buscarResultadosService
      .obtenerDatos(loteria.game_Id, fechaEnFormatoDeseado)
      .subscribe((data) => {
        let resultado ;
        if (typeof data === 'string') {
          resultado = null;
        } else {
          resultado = data[0].combinacion;
        }


       const respuestaDeLaApi: resultadoLoteria = {
          titulo: 'RESULTADO DEL ULTIMO SORTEO',
          imagen: loteria.imageUrl,
          fecha: this.fecha.toString(),
          nombre: loteria.title,
          resultados: resultado,
          combinacion: resultado,
          fondo: loteria.backgroundColor,
          textcolor: loteria.textColor,
          game_Id: loteria.game_Id,
          reintegro: data[0].reintegros
        };

      // emitir el objeto al hermano resultados componentn
      this.respuestaResultado.emit(respuestaDeLaApi);


      });
  }
}
