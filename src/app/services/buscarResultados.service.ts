import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarResultadosService {
  constructor(private http: HttpClient) {}

  obtenerDatos(gameId: string, fechaSorteo: string): Observable<any> {
    const url = 'https://www.loteriasyapuestas.es/servicios/fecha2';

    // Agrega los parámetros a la URL
    const params = {
      game_id: gameId,
      fecha_sorteo: fechaSorteo,
    };
    const headers = {
      AccessControlAllowOrigin: ""
    };

    return this.http.get(url, { params })
  }
}
