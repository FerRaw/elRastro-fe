import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversacion } from '../../interfaces/conversacion';

@Injectable({
  providedIn: 'root'
})
export class ConversacionService {

  constructor(private http:HttpClient) {}

  getConversacionInfo(idChat: string): Observable<any> {
      const url = 'https://13.38.223.212:8006/api/conversacion/'+ idChat + "/";
      return this.http.get<any>(url);
  }    

  getAllConversaciones(usuarioId: string) : Observable<any> {
    const url = 'https://13.38.223.212:8006/api/conversaciones/' + usuarioId +"/";
    return this.http.get<any>(url);
  }

  enviarMensaje(idChat: string, nuevoMensaje: any): Observable<any> {
    const url = 'https://13.38.223.212:8006/api/conversacion/' + idChat + '/chat/';
    return this.http.post<any>(url, nuevoMensaje);
  }

  createConversacion(conversacion: Conversacion): Observable<Conversacion> {
    const url = 'https://13.38.223.212:8006/api/conversaciones/';
    return this.http.post<Conversacion>(url, conversacion);
  }

  getConversacionDe(usuario1: string, usuario2: string, productoId: string) : Observable<any> {
    const url = 'https://13.38.223.212:8006/api/conversacion/get/' + usuario1 + "/" + usuario2 + "/productos/" + productoId + "/";
    return this.http.get<any>(url);
  }
  
}
