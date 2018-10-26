import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  constructor(private resultadosService: ResultadosService) { }

  ngOnInit() {
    this.resultadosService.getResult().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}
