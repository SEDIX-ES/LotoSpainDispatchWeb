import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { InterfazBoleto } from '../models/BoletoInterface';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: [
    './compras.component.scss',
    './queries/compras.component-mobile.scss',
  ],
})
export class ComprasComponent implements OnInit {

  data: InterfazBoleto[] = [
    {
      id: 1,
      nombre: "reyes",
      numero: "12345",
      serie: 22,
      fraccion: 3,
      precio: 22,
      disponibilidad: 1,
    },
    {
      id: 2,
      nombre: "navidad",
      numero: "12346",
      serie: 22,
      fraccion: 3,
      precio: 22,
      disponibilidad: 1,
    },
    {
      id: 3,
      nombre: "reyes",
      numero: "12347",
      serie: 22,
      fraccion: 3,
      precio: 22,
      disponibilidad: 1,
    },
    {
      id: 1,
      nombre: "reyes",
      numero: "12348",
      serie: 22,
      fraccion: 3,
      precio: 22,
      disponibilidad: 1,
    }
  ];
  filtro: string = '';

  constructor(
    private http: HttpClient,
    private productService: ProductosService,
    private router: Router,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
    // this.getProductos();
  }

  // getProductos(){
  //   this.productService.getAll().subscribe({
  //     next: (res: any) => {
  //       const result: InterfazBoleto[] = res;
  //       this.data = result.filter(products => this.disponibility(products.disponibilidad));
  //       console.log(res)
  //     },
  //     error: (error) => {
  //       console.log('ERROR OBTENIENDO LOS DATOS', error)
  //     },
  //     complete: () =>{}
  //   })
  // }

  onTextChange(text: string) {
    this.filtro = text;
  }

  disponibility(dispo: number): boolean {
    if (dispo == 1) {
      return true;
    } else {
      return false;
    }
  }

  ubicacion() {
    // Redirige a la página de inicio
    this.router.navigateByUrl('/home').then(() => {
      // Espera a que se complete la navegación y luego realiza el desplazamiento
      const element = this.el.nativeElement.querySelector('#contactoSeccion');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
