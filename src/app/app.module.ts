import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { Seccion4Component } from './seccion4/seccion4.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { ComprasComponent } from './compras/compras.component';
import { ContactoComponent } from './compras/contacto/contacto.component';
import { CboletoComponent } from './compras/cboleto/cboleto.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { BuscadorComponent } from './compras/buscador/buscador.component';
import { ComprasPipe } from './services/compras.pipe';
import { CommonModule } from '@angular/common';
import { Seccion3Component } from './seccion3/seccion3.component';
import { CardComponent } from './seccion3/card/card.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { CardsjuegosComponent } from './consultas/cardsjuegos/cardsjuegos.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { FiltrosComponent } from './consultas/filtros/filtros.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ResultadosComponent } from './consultas/resultados/resultados.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CnoticiaComponent } from './noticias/cnoticia/cnoticia.component';
import { Carrousel2Component } from './carrousel2/carrousel2.component';
import { NoticiaModalComponent } from './noticias/noticia-modal/noticia-modal.component';
import { BotesComponent } from './botes/botes.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    Seccion4Component,
    Seccion2Component,
    ComprasComponent,
    ContactoComponent,
    CboletoComponent,
    FooterComponent,
    BuscadorComponent,
    ComprasPipe,
    Seccion3Component,
    CardComponent,
    ConsultasComponent,
    CardsjuegosComponent,
    Seccion1Component,
    FiltrosComponent,
    CarrouselComponent,
    ResultadosComponent,
    NoticiasComponent,
    CnoticiaComponent,
    Carrousel2Component,
    NoticiaModalComponent,
    BotesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
