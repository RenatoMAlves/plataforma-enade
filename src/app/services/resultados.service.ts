import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Endpoinst } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(private http: Http) { }

  public getResult(): Observable<any> {
    return this.http.get(Endpoinst.getResult()).pipe(
      tap(
        data => {
          return {... data};
        },
        error => {
          return error;
        }
      )
    )
  }
}
