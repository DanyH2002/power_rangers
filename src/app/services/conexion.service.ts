import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  baseUrl = 'http://localhost/ranger/controller/';
  constructor(private http: HttpClient) { }
  //USUARIO
  getUsuario(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuario.php?opcion=GetAll`);
  }

  insertarUsuario(datos: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/usuario.php?opcion=Insert`, datos);
  }

  getUsuarioPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuario.php?opcion=GetId&id_usuario=${id}`);
  }
  //VISTAS
  //FORMULARIOS
}
