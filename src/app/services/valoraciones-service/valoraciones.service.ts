import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValoracionesService {

  constructor(private http:HttpClient) {}

  getValoraciones(idUsuario: string): Observable<any> {
    const url = 'http://51.21.137.60:8007/api/valoraciones_recibidas/'+idUsuario;
    return this.http.get<any>(url);
  }

  getValoracionesHechas(idUsuario: string): Observable<any> {
    const url = 'http://51.21.137.60:8007/api/valoraciones_hechas/'+idUsuario;
    return this.http.get<any>(url);
  }

  crearValoracion(valoracion: any): Observable<any> {
    const url = 'http://51.21.137.60:8007/api/valoracion/';
    return this.http.post<any>(url, valoracion);
  }
}
