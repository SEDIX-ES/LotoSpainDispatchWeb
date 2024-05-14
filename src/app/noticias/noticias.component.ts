import { Component, OnInit } from '@angular/core';
import { InterfazNoticia } from '../models/NoticiaInterface';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss','./queries/noticias.component-mobile.scss']
})
export class NoticiasComponent implements OnInit {
  noticias: InterfazNoticia[] = [
    {
      id: 1,
      author: "Álex Varela",
      title: "COMPRAR LOTERÍA DE NAVIDAD EN LUGO POR ADMINISTRACIÓN",
      body: "Prueba para ver si todo se muestra bien",
      date: "junio 7, 2023",
      tags: "lotería, navidad"
    },
    {
      id: 2,
      author: "Antonio Ramírez",
      title: "COMPRAR LOTERÍA DE NAVIDAD EN LUGO POR ADMINISTRACIÓN",
      body: "Prueba para ver si todo se muestra bien",
      date: "junio 7, 2023",
      tags: "lotería, navidad"
    },
    {
      id: 3,
      author: "Christian Lira",
      title: "COMPRAR LOTERÍA DE NAVIDAD EN LUGO POR ADMINISTRACIÓN",
      body: "Prueba para ver si todo se muestra bien, agregando un texto extenso como contenido de la noticia para ver si se corta o se me amplia la tarjeta",
      date: "junio 7, 2023",
      tags: "lotería, navidad"
    },
    {
      id: 4,
      author: "Aitor Tilla",
      title: "COMPRAR LOTERÍA DE NAVIDAD EN LUGO POR ADMINISTRACIÓN",
      body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
      date: "junio 7, 2023",
      tags: "lotería, navidad"
    },
    {
      id: 5,
      author: "Poli",
      title: "COMPRAR LOTERÍA DE NAVIDAD EN LUGO POR ADMINISTRACIÓN",
      body: "Prueba para ver si todo se muestra bien, agregando un texto extenso como contenido de la noticia para ver si se corta o se me amplia la tarjeta",
      date: "junio 7, 2023",
      tags: "lotería, navidad"
    },
  ];

  ngOnInit(): void {

  }


}
