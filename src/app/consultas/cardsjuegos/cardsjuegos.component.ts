import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados.service';
import { DResultadoQuiniComponent } from '../d-resultado-quini/d-resultado-quini.component';
import { MatDialog } from '@angular/material/dialog';
import { DResultadoBonoComponent } from '../d-resultado-bono/d-resultado-bono.component';
import { DResultadoEurodComponent } from '../d-resultado-eurod/d-resultado-eurod.component';
import { DResultadoEuromComponent } from '../d-resultado-eurom/d-resultado-eurom.component';
import { DResultadoGordoComponent } from '../d-resultado-gordo/d-resultado-gordo.component';
import { DResultadoLotoComponent } from '../d-resultado-loto/d-resultado-loto.component';
import { DResultadoNacComponent } from '../d-resultado-nac/d-resultado-nac.component';
import { DResultadoPrimiComponent } from '../d-resultado-primi/d-resultado-primi.component';
import { DResultadoQuinigComponent } from '../d-resultado-quinig/d-resultado-quinig.component';
import { DResultadoQuintComponent } from '../d-resultado-quint/d-resultado-quint.component';

@Component({
  selector: 'app-cardsjuegos',
  templateUrl: './cardsjuegos.component.html',
  styleUrls: [
    './cardsjuegos.component.scss',
    './queries/cardsjuegos.component-mobile.scss',
  ],
})
export class CardsjuegosComponent {
  @Input() filterText: string = '';
  //decorador input que recibe datos
  @Input() fecha!: Date;

  btnIsActive: boolean = false;
  data: any;
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
      title: 'Euromillones',
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
    {
      imageUrl: '../../../assets/LoteriaNacional.png',
      title: 'Eurodreams',
      buttonText: 'Consultar',
      backgroundColor: '#a0a2ec',
      textColor: '#6b3e98',
      btnColor: '#6b3e98',
      game_Id: 'EURD',
    },
    {
      imageUrl: '../../../assets/LoteriaNacional.png',
      title: 'Quinigol',
      buttonText: 'Consultar',
      backgroundColor: '#b8ddfd99',
      textColor: 'rgba(64, 186, 206, 0.7)',
      btnColor: 'rgba(64, 186, 206, 0.7)',
      game_Id: 'QUIG',
    },
    {
      imageUrl: '../../../assets/LoteriaNacional.png',
      title: 'Lototurf',
      buttonText: 'Consultar',
      backgroundColor: 'rgba(236, 105, 32, 0.31)',
      textColor: '#d16929',
      btnColor: '#d16929',
      game_Id: 'LOTT',
    },
    {
      imageUrl: '../../../assets/LoteriaNacional.png',
      title: 'Quintuple',
      buttonText: 'Consultar',
      backgroundColor: '#faefd7',
      textColor: '#eab842',
      btnColor: '#eab842',
      game_Id: 'QUIT',
    },
  ];

  filteredCards: any[] = this.cards;

  constructor(
    private dialog: MatDialog
  ) {
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

  consultar(sorteo: string) {

    var fechaSorteo: string =
      this.fecha.getFullYear() +
      '-' +
      (this.fecha.getMonth() + 1) +
      '-' +
      this.fecha.getDate();

    switch (sorteo) {
      case 'Bonoloto':
        const dialogRefB = this.dialog.open(DResultadoBonoComponent, {
          data: fechaSorteo,
        });

        dialogRefB.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'Euromillones':
        const dialogRefEm = this.dialog.open(DResultadoEuromComponent, {
          data: fechaSorteo,
        });

        dialogRefEm.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'Eurodreams':
        const dialogRefEd = this.dialog.open(DResultadoEurodComponent, {
          data: fechaSorteo,
        });

        dialogRefEd.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'Lototurf':
        const dialogRefL = this.dialog.open(DResultadoLotoComponent, {
          data: fechaSorteo,
        });

        dialogRefL.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'ElGordo':
        const dialogRefG = this.dialog.open(DResultadoGordoComponent, {
          data: fechaSorteo,
        });

        dialogRefG.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'Loteria Nacional':
        const dialogRefN = this.dialog.open(DResultadoNacComponent, {
          data: fechaSorteo,
        });

        dialogRefN.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'LaPrimitiva':
        const dialogRefP = this.dialog.open(DResultadoPrimiComponent, {
          data: fechaSorteo,
        });

        dialogRefP.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'Quiniela':
        const dialogRefQ = this.dialog.open(DResultadoQuiniComponent, {
          data: fechaSorteo,
        });

        dialogRefQ.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'Quinigol':
        const dialogRefQg = this.dialog.open(DResultadoQuinigComponent, {
          data: fechaSorteo,
        });

        dialogRefQg.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
      case 'Quintuple':
        const dialogRefQt = this.dialog.open(DResultadoQuintComponent, {
          data: fechaSorteo,
        });

        dialogRefQt.afterClosed().subscribe((result) => {
          console.log('Diálogo cerrado', result);
        });
        break;
    }
  }
}
