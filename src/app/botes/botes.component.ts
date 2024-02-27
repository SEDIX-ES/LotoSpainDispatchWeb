import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botes',
  templateUrl: './botes.component.html',
  styleUrls: ['./botes.component.scss','./queries/botes.component-mobile.scss'],
})
export class BotesComponent implements OnInit {
  botes:number[]=[0,0,0,0,0,0,0,0,0,0];
  booleanos:boolean[]=[false,false,false,false,false,false,false,false,false,false]

  ngOnInit(): void {
    //TODO implementar API botes
    this.obtenerBotes();
    this.botesAMostrar();
  }

  obtenerBotes() {
    this.botes[0] = 17000000;
    this.botes[1] = 3600000;
    this.botes[2] = 0;
    this.botes[3] = 9100000;
    this.botes[4] = 20000;
    this.botes[5] = 600000;
    this.botes[6] = 0;
    this.botes[7] = 1230000;
    this.botes[8] = 120000;
    this.botes[9] = 22000;
  }

  botesAMostrar() {
    var i:number;
    for(i=0;i<this.botes.length;i++){
      if(this.botes[i]==0){

      }else if(this.botes[i]/1000000>1){
        this.botes[i]=this.botes[i]/1000000;
        this.booleanos[i]=true;
      }
    }
  }
}
