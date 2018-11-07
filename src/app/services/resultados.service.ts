import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Endpoinst } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  headers: any;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Content-type", "application/json")
  }

  public getResultByAnoCursoAndArea(ano, id_curso, id_area): Observable<any> {
    return this.http.get(Endpoinst.getResultByAnoCursoAndArea(ano, id_curso, id_area), {headers: this.headers}).pipe(
      tap(
        data => {
          return {... data};
        },
        error => {
          console.log(error)
          return error;
        }
      )
    )
  }

  public getResultCertasByAnoCursoAndArea(ano, id_curso, id_area): Observable<any>{
    return this.http.get(Endpoinst.getResultCertasByAnoCursoAndArea(ano, id_curso, id_area), {headers: this.headers}).pipe(
      tap(
        data => {
          return {... data};
        },
        error => {
          console.log(error)
          return error;
        }
      )
    )
  }

  public getResultErradasByAnoCursoAndArea(ano, id_curso, id_area): Observable<any>{
    return this.http.get(Endpoinst.getResultErradasByAnoCursoAndArea(ano, id_curso, id_area), {headers: this.headers}).pipe(
      tap(
        data => {
          return {... data};
        },
        error => {
          console.log(error)
          return error;
        }
      )
    )
  }

  public getResultBrancoByAnoCursoAndArea(ano, id_curso, id_area): Observable<any>{
    return this.http.get(Endpoinst.getResultBrancoByAnoCursoAndArea(ano, id_curso, id_area), {headers: this.headers}).pipe(
      tap(
        data => {
          return {... data};
        },
        error => {
          console.log(error)
          return error;
        }
      )
    )
  }
}
