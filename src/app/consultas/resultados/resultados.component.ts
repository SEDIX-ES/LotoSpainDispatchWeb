import { Component, Input, OnInit } from '@angular/core';
import { resultadoLoteria } from '../../models/resultadoLoteria';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {


  @Input() sorteoInfo!: resultadoLoteria;

  ngOnInit(): void {

  }

  consul(){

    console.log(this.sorteoInfo);
  }

}

