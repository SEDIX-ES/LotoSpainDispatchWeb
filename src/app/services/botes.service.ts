import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentBote } from '../environrmentBotes';

@Injectable({
  providedIn: 'root'
})
export class BotesService {

  constructor(private http: HttpClient) { }

  getUltimos() {
    const opciones = {
      headers: new HttpHeaders({
        accept: 'text/plain',
      }),
    };
    return this.http.get(environmentBote.URLServer + 'Botes/Ultimos');
  }

}
