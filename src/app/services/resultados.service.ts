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
      .set("Access-Control-Allow-Origin", "*")

  }

  public getResult(): Observable<any> {
    return this.http.get(Endpoinst.getResult(), {headers: this.headers}).pipe(
      tap(
        data => {
          console.log('teste');
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
