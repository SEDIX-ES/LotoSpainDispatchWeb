import { Component, Input } from '@angular/core';
import { InterfazBoleto } from 'src/app/models/boletoInterface';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-cboleto',
  templateUrl: './cboleto.component.html',
  styleUrls: [
    './cboleto.component.scss',
    './queries/cboleto.component-mobile.scss',
  ],
})
export class CboletoComponent {
  @Input() value!: InterfazBoleto;
  cantidad:number = 1;
  constructor(
    private _whatsappservice: WhatsappService
  ) { }

  comprar(numero: string, reyes:boolean) {
    var msg:string;
    if(reyes){
      msg = "¡Hola! Me pongo en contacto con usted porque me gustaría comprar " + this.cantidad +" boletos del número " + numero + " para el sorteo de navidad. Quedo a la espera de su respuesta.";
    }else{
      msg = "¡Hola! Me pongo en contacto con usted porque me gustaría comprar " + this.cantidad +" boletos del número " + numero + " para el sorteo del niño. Quedo a la espera de su respuesta.";
    }

    this._whatsappservice.redirigirAWhatsApp(msg);
  }

  disponibility(): boolean {
    if (this.value.disponibilidad == 1) {
      return true;
    } else {
      return false;
    }
  }

  reyes(): boolean {
    if (this.value.nombre.toLowerCase().includes('reyes')) {
      return true
    } else {
      return false
    }
  }
}

