import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private apiUrl = 'https://wa.me/';
  private numero = '34627055014';

  constructor(private http: HttpClient) { }

  redirigirAWhatsApp(mensaje: string): void {
    const url = `https://wa.me/${this.numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  redirigirAWhatsAppVacio(): void {
    const url = `https://wa.me/${this.numero}`;
    window.open(url, '_blank');
  }
}
