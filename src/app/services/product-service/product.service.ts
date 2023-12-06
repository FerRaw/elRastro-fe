import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  getProductInfo(idProducto: string): Observable<any> {
    const url = 'http://localhost:8001/api/productos/'+idProducto;
    return this.http.get<any>(url);
  }
}
