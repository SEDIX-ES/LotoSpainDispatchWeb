import { Component, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WhatsappService } from '../services/whatsapp.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './queries/footer.component-mobile.scss']
})
export class FooterComponent {

  constructor(
    private router: Router,
    private el: ElementRef,
    private _whatsappService: WhatsappService
  ) {}

  ubicacion() {
    // Redirige a la página de inicio (asegúrate de que la ruta '/home' esté configurada en tu enrutamiento)
    this.router.navigate(['']).then(() => {
      console.log("");
      // Espera a que se complete la navegación y luego realiza el desplazamiento
      const element = this.el.nativeElement.querySelector('#contactoSeccion');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  irAWhatsApp(){
    this._whatsappService.redirigirAWhatsAppVacio();
  }

  llamar() {
    window.location.href = 'tel:+34627055014';
  }
}
