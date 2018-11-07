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
  private dados: any[];
  private qtd_questoes: number;
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
    this.dadosGraficoAcertos = this.iniciaVarGraficoBarras([]);
    this.dadosGraficoErros = this.iniciaVarGraficoBarras([]);
    this.dadosGraficoBranco = this.iniciaVarGraficoBarras([]);
  }

  ngOnInit() {
    
  }

  getDataByAnoCursoAndArea(){
    this.concluido = false;

    this.resultadosService.getResultByAnoCursoAndArea(this.formFiltro.value.ano, this.formFiltro.value.curso, this.formFiltro.value.area).subscribe(
      (data) => {
        this.dados = data;
        this.qtd_questoes = data[0].qtd_questoes;
        if(data.length === 0){
          this.concluido = false;
        }
        else{

          this.dadosGraficoAcertos = this.iniciaVarGraficoBarras(data);
          this.dadosGraficoErros = this.iniciaVarGraficoBarras(data);
          this.dadosGraficoBranco = this.iniciaVarGraficoBarras(data);

          data.forEach(element => {
            this.graficoAcertos(element.id_regiao, element.qtd_certas, element.porcentagem_certas, element.volume_incidencias);
            this.graficoErros(element.id_regiao, element.qtd_erradas, element.porcentagem_erradas, element.volume_incidencias);
            this.graficoBranco(element.id_regiao, element.qtd_branco_invalidas, element.porcentagem_branco_invalida, element.volume_incidencias);
          });

          this.concluido = true;
        }
      },
      (error) => {
        console.log(error);
        
      }
    )

  }

  graficoAcertos(regiao, qtd_certas, porcentagem, volume_incidencias){
    let indiceRegiao = this.dadosGraficoAcertos.findIndex(reg => reg.name === regiao)
    let index = this.dadosGraficoAcertos[indiceRegiao].series.findIndex(serie => serie.name === qtd_certas + " (" + porcentagem + "%)");
    if(index !== -1){
      this.dadosGraficoAcertos[indiceRegiao].series[index].value =  this.dadosGraficoAcertos[indiceRegiao].series[index].value + volume_incidencias
    }
    else {
      this.dadosGraficoAcertos[indiceRegiao].series.push({
        "name": String(qtd_certas + " (" + porcentagem + "%)"),
        "value": volume_incidencias
      });
    }
  }

  graficoErros(regiao, qtd_erradas, porcentagem, volume_incidencias){
    let indiceRegiao = this.dadosGraficoAcertos.findIndex(reg => reg.name === regiao)
    let index = this.dadosGraficoErros[indiceRegiao].series.findIndex(serie => serie.name === qtd_erradas + " (" + porcentagem + "%)");
    if(index !== -1){
      this.dadosGraficoErros[indiceRegiao].series[index].value =  this.dadosGraficoErros[indiceRegiao].series[index].value + volume_incidencias
    }
    else {
      this.dadosGraficoErros[indiceRegiao].series.push({
        "name": String(qtd_erradas + " (" + porcentagem + "%)"),
        "value": volume_incidencias
      });
    }
  }

  graficoBranco(regiao, qtd_branco_invalida, porcentagem, volume_incidencias){
    let indiceRegiao = this.dadosGraficoAcertos.findIndex(reg => reg.name === regiao)
    let index = this.dadosGraficoBranco[indiceRegiao].series.findIndex(serie => serie.name ===  qtd_branco_invalida + " (" + porcentagem + "%)");
    if(index !== -1){
      this.dadosGraficoBranco[indiceRegiao].series[index].value =  this.dadosGraficoBranco[indiceRegiao].series[index].value + volume_incidencias
    }
    else {
      this.dadosGraficoBranco[indiceRegiao].series.push({
        "name": String(qtd_branco_invalida + " (" + porcentagem + "%)"),
        "value": volume_incidencias
      });
    }
  }

  iniciaVarGraficoBarras(dados: any[]){
    let vet = [
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

    // Verificação para criar o formato previamente para ficar em ordem na hora de apresentar ao usuário

    if(dados.length != 0){
      vet.forEach((element) => {
        dados.forEach((data) =>{
          if(element.series.findIndex(element => element.name ===  (data.qtd_certas + " (" + data.porcentagem_certas + "%)")) === -1)
            element.series.push({ 
              "name": String(data.qtd_certas + " (" + data.porcentagem_certas + "%)"),
              "value": 0
            });
        })
      })
    }

    return vet
  }

}
