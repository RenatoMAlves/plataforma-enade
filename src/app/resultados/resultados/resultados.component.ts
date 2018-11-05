import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../../services/resultados.service';
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

  colorSchemeAcertos = {
    domain: ['#23C675', '#7CB297', '#32895E', '#289B61', '#165B38', '#0C3A05', '#0B4226', '#1F3F2F', '#0D110F']
  };
  colorSchemeErros = {
    domain: ['#DD6363', '#D6283A', '#FF0707', '#C43E3E', '#D00000', '#A80818', '#930211', '#3F0D12', '#490007']
  };
  colorSchemeBranco = {
    domain: ['#BCD3E0', '#98C1D9', '#6997B2', '#297B93', '#5688A5', '#39627A', '#374C59', '#112633', '#172026']
  };

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
