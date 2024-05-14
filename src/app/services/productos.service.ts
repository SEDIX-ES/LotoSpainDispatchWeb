import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable, from, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  getAll() {
    const opciones = {
      headers: new HttpHeaders({
        accept: 'text/plain',
      }),
    };
    return this.http.get(environment.URLServer + 'products');
  }
}
