import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Seccion4Component } from './seccion4/seccion4.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { ComprasComponent } from './compras/compras.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaModalComponent } from './noticias/noticia-modal/noticia-modal.component';
import { BotesComponent } from './botes/botes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'compras',
    component: ComprasComponent,
  },
  {
    path: 'consultas',
    component: ConsultasComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
