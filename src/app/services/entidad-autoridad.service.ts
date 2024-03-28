import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntidadAutoridadService {
private url = 'http://localhost:8080/entidad-autoridad ' ;

  constructor(private http: HttpClient) { }
}
