import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InterfazNoticia } from 'src/app/models/NoticiaInterface';
import { NoticiaModalComponent } from '../noticia-modal/noticia-modal.component';

@Component({
  selector: 'app-cnoticia',
  templateUrl: './cnoticia.component.html',
  styleUrls: [
    './cnoticia.component.scss',
    './queries/cnoticia.componentes.scss',
  ],
})
export class CnoticiaComponent implements OnInit {
  @Input() noticia!: InterfazNoticia;
  iniciales: string = '';

  constructor(private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerIniciales();
  }

  openNews(noticia: InterfazNoticia) {
    const dialogRef = this.dialog.open(NoticiaModalComponent, {
      data: noticia
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openOptions() { }

  obtenerIniciales() {
    const palabras: string[] = this.noticia.author.split(' ');
    if (palabras.length >= 2) {
      for (var i = 0; i < 2; i++) {
        this.iniciales += palabras[i].substring(0, 1);
      }
    } else {
      this.iniciales += this.noticia.author.substring(0, 1);
    }
  }

}
