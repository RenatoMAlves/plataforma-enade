import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  private ano:any;
  private id_area : any;
  private id_curso : any;
  private dadosGrafico: any[];
  concluido: boolean = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  legendTitle = "Ano: 2008";
  xAxisLabel = 'Porcentagem de Acertos';
  showYAxisLabel = true;
  yAxisLabel = 'Volume de Incidências';

  colorScheme = {
    domain: ['#5AA454', '#A4A5D6', '#C4D5A2', '#AAAAAA']
  };

  single: any[];

  multi: any[];

  // line, area
  autoScale = true;


  constructor(private resultadosService: ResultadosService) {
    this.getDataByAnoCursoAndArea();
  }

  ngOnInit() {
  }

  getDataByAnoCursoAndArea(){
    this.ano = 2008;
    this.id_area = 6;
    this.id_curso = 1;

    this.dadosGrafico = [
      {
        "name": "Norte",
        "series": []
      },
      {
        "name": "Nordeste",
        "series": []
      },
      {
        "name": "Centro-Oeste",
        "series": []
      },
      {
        "name": "Sudeste",
        "series": []
      },
      {
        "name": "Sul",
        "series": []
      },
    ]

    this.resultadosService.getResultByAnoCursoAndArea(this.ano, this.id_curso,this.id_area).subscribe(
      (data) => {
        data.forEach(element => {
          this.graficoAcertos(element.id_regiao, element.porcentagem_certas, element.volume_incidencias);
        });
        console.log(this.dadosGrafico);
        this.concluido = true;
      },
      (error) => {
        console.log(error);
        
      }
    )

  }

  graficoAcertos(regiao, porcentagem, volume_incidencias){
    var index = this.dadosGrafico[regiao-1].series.findIndex(serie => serie.name === porcentagem + "%");
    if(index !== -1){
      this.dadosGrafico[regiao-1].series[index].value =  this.dadosGrafico[regiao-1].series[index].value + volume_incidencias
    }
    else {
      this.dadosGrafico[regiao-1].series.push({
        "name": String(porcentagem) + "%",
        "value": volume_incidencias
      });
    }
  }

}
