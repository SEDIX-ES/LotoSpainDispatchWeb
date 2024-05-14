import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentBote } from '../environrmentBotes';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(private http: HttpClient) { }

  getSorteoFecha(sorteo: string, fecha:string) {
    const opciones = {
      headers: new HttpHeaders({
        accept: 'text/plain',
      }),
    };
    return this.http.get(environmentBote.URLServer + sorteo+"/"+fecha , { observe: 'response' });
  }

}
