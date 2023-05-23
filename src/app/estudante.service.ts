import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudante } from './estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {
  url = "http://localhost:3000/estudantes";

  constructor(private http: HttpClient) { }


  getAll(): Observable<Estudante[]> {

      return this.http.get<Estudante[]>(this.url);
  }

  add(newClient : Estudante): Observable<Estudante> {
    return this.http.post<Estudante>(this.url, newClient);
  }
}
