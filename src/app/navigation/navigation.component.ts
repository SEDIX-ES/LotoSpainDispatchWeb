import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { WhatsappService } from '../services/whatsapp.service';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [
    './navigation.component.scss',
    './queries/navigation.component-mobile.scss',
  ],
  animations: [
    trigger('entrarSalir', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }), // Inicialmente oculto y sin altura
        animate('1000ms ease-out', style({ opacity: 1, height: '*' })), // Despliegue hacia abajo
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, height: '0px' })), // Ocultar reduciendo la altura
      ]),
    ]),
  ],
})
export class NavigationComponent {
  @ViewChild('drawer')
  drawer!: MatSidenav;

  // private breakpointObserver = inject(BreakpointObserver);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private sanitizer: DomSanitizer,
    private el: ElementRef, // Agrega ElementRef como parámetro en el constructor
    private _whatsappservice: WhatsappService
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  goHome() {
    this.router.navigate(['']); // 'home' debe ser la ruta de tu página de inicio
  }

  comprarBoleto() {
    this.router.navigate(['/compras']);
  }

  consultas() {
    this.router.navigate(['/consultas']);
  }

  ubicacion() {
    // Redirige a la página de inicio (asegúrate de que la ruta '/home' esté configurada en tu enrutamiento)
    this.router.navigate(['']).then(() => {
      // Espera a que se complete la navegación y luego realiza el desplazamiento
      const element = this.el.nativeElement.querySelector('#contactoSeccion');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  //Codigo menu responsive y toggle //

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  irAWhatsApp() {
    this._whatsappservice.redirigirAWhatsAppVacio();
    this.isMenuOpen = !this.isMenuOpen;
  }

  llamar() {
    window.location.href = 'tel:+34627055014';
    this.isMenuOpen = !this.isMenuOpen;
  }
}
