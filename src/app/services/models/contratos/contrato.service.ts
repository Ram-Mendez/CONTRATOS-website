import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const urlEndPoint: string = 'http://localhost:8080/swagger-ui/index.html#/';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private url = 'http://localhost:8080/contratos'

  constructor(private http: HttpClient) {
  }

  crearContrato(contratoForm: any): Observable<any> {
    return this.http.post(this.url, contratoForm);
  }

  actualizarContrato(contratoForm: any, id: any): Observable<any> {
    return this.http.put('http://localhost:8080/contratos/' + id, contratoForm);
  }

  obtenerContrato(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteContrato(id: number): Observable<boolean> {
    return this.http.delete<boolean>('http://localhost:8080/contratos/' + id);
  }

}
