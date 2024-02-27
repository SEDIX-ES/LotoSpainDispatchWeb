import { Component } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss', './queries/contacto.component-mobile.scss']
})
export class ContactoComponent {

  constructor(
    private _whatsappservice: WhatsappService
  ){}

  llamar(){
    window.location.href = 'tel:+34627055014';
  }

  whatsApp(){
    this._whatsappservice.redirigirAWhatsAppVacio();
  }
}
