import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss','./queries/carrousel.component-mobile.scss'],
})
export class CarrouselComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Slide 1',
      description:
        'Somos la Administración de Loterías y Apuestas del Estado Nº1 de Viveiro,más de 70 años de historia nos avalan.',
      imageUrl: '../../assets/numero1.jpeg',
    },
    {
      title: 'Slide 2',
      description:
        'Desde nuestra web puedes consultar nuestra ubicación y nuestros datos de contacto, ¡no dudes en preguntarnos por tu número favorito! En nuestro establecimiento puedes jugar a todos los juegos de Loterías y Apuestas del Estado, ya que somos punto de venta oficial. Por lo tanto puedes jugar con la total tranquilidad que esto ofrece, la de tener un equipo detrás con años de experiencia. ',
      imageUrl: '../../assets/numero1.jpeg',
    },
    {
      title: 'Slide 3',
      description:
        'Son numerosos los premios repartidos durante todos estos años, pero lo más importante es la relación con nuestros clientes, por ello siempre nos tendrás al otro lado de una llamada telefónica, un mensaje, un e-mail o una visita a nuestro punto oficial de venta en la Plaza Mayor de Viveiro.',
      imageUrl: '../../assets/numero1.jpeg',
    },
  ];

  currentImageIndex = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  changeSlide(index: number) {
    this.currentImageIndex = index;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    if (this.currentImageIndex < this.slides.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }
}
