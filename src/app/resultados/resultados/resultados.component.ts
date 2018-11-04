import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  private dadosGraficoAcertos: any[];
  private dadosGraficoErros: any[];
  private dadosGraficoBranco: any[];
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
  autoScale = true;
  colorSchemeAcertos = {
    domain: ['#B5FFBD', '#6AD178', '#22772C', '#0B4211', '#102813']
  };
  colorSchemeErros = {
    domain: ['#D6283A', '#A80818', '#930211', '#3F0D12', '#490007']
  };
  colorSchemeBranco = {
    domain: ['#98C1D9', '#6997B2', '#39627A', '#374C59', '#172026']
  };

  // Dados para os gráficos
  multi: any[];

  formFiltro = new FormGroup({
    ano: new FormControl("2008", [Validators.required]),
    curso: new FormControl("1", [Validators.required]),
    area: new FormControl("1", [Validators.required]),
  });

  constructor(private resultadosService: ResultadosService) {
    this.dadosGraficoAcertos = [
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
    this.dadosGraficoErros = [
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
    this.dadosGraficoBranco = [
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
  }

  ngOnInit() {
    
  }

  getDataByAnoCursoAndArea(){
    this.concluido = false;

    this.resultadosService.getResultByAnoCursoAndArea(this.formFiltro.value.ano, this.formFiltro.value.curso, this.formFiltro.value.area).subscribe(
      (data) => {
        console.log(data);
        data.forEach(element => {
          this.graficoAcertos(element.id_regiao, element.porcentagem_certas, element.volume_incidencias);
          this.graficoErros(element.id_regiao, element.porcentagem_erradas, element.volume_incidencias);
          this.graficoBranco(element.id_regiao, element.porcentagem_branco_invalida, element.volume_incidencias);
        });
        this.concluido = true;
      },
      (error) => {
        console.log(error);
        
      }
    )

  }

  graficoAcertos(regiao, porcentagem, volume_incidencias){
    var index = this.dadosGraficoAcertos[regiao-1].series.findIndex(serie => serie.name === porcentagem + "%");
    if(index !== -1){
      this.dadosGraficoAcertos[regiao-1].series[index].value =  this.dadosGraficoAcertos[regiao-1].series[index].value + volume_incidencias
    }
    else {
      this.dadosGraficoAcertos[regiao-1].series.push({
        "name": String(porcentagem) + "%",
        "value": volume_incidencias
      });
    }
  }

  graficoErros(regiao, porcentagem, volume_incidencias){
    var index = this.dadosGraficoErros[regiao-1].series.findIndex(serie => serie.name === porcentagem + "%");
    if(index !== -1){
      this.dadosGraficoErros[regiao-1].series[index].value =  this.dadosGraficoErros[regiao-1].series[index].value + volume_incidencias
    }
    else {
      this.dadosGraficoErros[regiao-1].series.push({
        "name": String(porcentagem) + "%",
        "value": volume_incidencias
      });
    }
  }

  graficoBranco(regiao, porcentagem, volume_incidencias){
    var index = this.dadosGraficoBranco[regiao-1].series.findIndex(serie => serie.name === porcentagem + "%");
    if(index !== -1){
      this.dadosGraficoBranco[regiao-1].series[index].value =  this.dadosGraficoBranco[regiao-1].series[index].value + volume_incidencias
    }
    else {
      this.dadosGraficoBranco[regiao-1].series.push({
        "name": String(porcentagem) + "%",
        "value": volume_incidencias
      });
    }
  }

}
