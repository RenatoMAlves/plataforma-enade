import { Component, OnInit, Input } from '@angular/core';
import * as shape from 'd3-shape';
import * as d3 from 'd3';

@Component({
  selector: 'app-grafico-polar-resultado',
  templateUrl: './grafico-polar-resultado.component.html',
  styleUrls: ['./grafico-polar-resultado.component.scss']
})
export class GraficoPolarResultadoComponent implements OnInit {
  
  @Input('dadosTotais') dadosTotais: any;

  concluido: boolean = false;
  teste: any[];
  dadosGrafico: any[];

  // Configurações do Gráfico
  curves = {
    'Cardinal Closed': shape.curveCardinalClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    default: shape.curveLinear
  };
  autoScale = true;
  colorScheme = {
    domain: ['#32895E', '#FF0707', '#297B93']
  }
  showGridLines = true;
  rangeFillOpacity: number = 0.10;
  gradient = false;
  view = [400,300]
  legenda: any;

  constructor() {
   }

  ngOnInit() {
    this.legenda = String("Qtd. Questões: " + this.dadosTotais[0].qtd_questoes)
    this.iniciarVetorGrafico();
    this.preencheVetorGrafico();
  }

  iniciarVetorGrafico(){
    this.concluido = false;
    this.dadosGrafico = [
      {
        regiao: "Norte",
        dados: [
        {
          name: "Certas",
          series: []
        },
        {
          name: "Erradas",
          series: []
        },
        {
          name: "Branco",
          series: []
        },
       ] 
      },
      {
       regiao: "Nordeste",
       dados: [
        {
          name: "Certas",
          series: []
        },
        {
          name: "Erradas",
          series: []
        },
        {
          name: "Branco",
          series: []
        },
       ] 
      },
      {
       regiao: "Centro-Oeste",
       dados: [
        {
          name: "Certas",
          series: []
        },
        {
          name: "Erradas",
          series: []
        },
        {
          name: "Branco",
          series: []
        },
       ] 
      },
      {
       regiao: "Sudeste",
       dados: [
        {
          name: "Certas",
          series: []
        },
        {
          name: "Erradas",
          series: []
        },
        {
          name: "Branco",
          series: []
        },
       ] 
      },
      {
       regiao: "Sul",
       dados: [
        {
          name: "Certas",
          series: []
        },
        {
          name: "Erradas",
          series: []
        },
        {
          name: "Branco",
          series: []
        },
       ] 
      },
    ]

    // Verificação para criar o formato previamente para ficar em ordem na hora de apresentar ao usuário
    if(this.dadosTotais.length != 0){
      for(let i of this.dadosGrafico){
        this.dadosGrafico.forEach((element) => {
          this.dadosTotais.filter(resultados => resultados.id_regiao === element.regiao).forEach((data) => {
            element.dados.forEach((tipo) => {
              if(tipo.series.findIndex(element => element.name ===  (data.qtd_certas + " (" + data.porcentagem_certas + "%)")) === -1){
                tipo.series.push({
                  name: String(data.qtd_certas + " (" + data.porcentagem_certas + "%)"),
                  value: 0
                })
              }
            })
          })
        })
      }
    }
  }

  preencheVetorGrafico(){
    this.dadosTotais.forEach(dadoCluster => {
      let index = this.dadosGrafico.findIndex(dados => dados.regiao === dadoCluster.id_regiao)
      this.dadosGrafico[index].dados.forEach(element => {
        if(element.name === 'Certas'){
          let indice = element.series.findIndex(elemento => elemento.name === (dadoCluster.qtd_certas + " (" + dadoCluster.porcentagem_certas + "%)"))
          if (indice !== -1)
            element.series[indice].value += dadoCluster.volume_incidencias
          else {
            element.series.push({
              "name": String(dadoCluster.qtd_certas + " (" + dadoCluster.porcentagem_certas + "%)"),
              "value": dadoCluster.volume_incidencias
            });
          }
        }
        else if(element.name === 'Erradas'){
          let indice = element.series.findIndex(elemento => elemento.name === (dadoCluster.qtd_erradas + " (" + dadoCluster.porcentagem_erradas + "%)"))
          if (indice !== -1)
            element.series[indice].value += dadoCluster.volume_incidencias
          else {
            element.series.push({
              "name": String(dadoCluster.qtd_erradas + " (" + dadoCluster.porcentagem_erradas + "%)"),
              "value": dadoCluster.volume_incidencias
            });
          }
        }
        else if(element.name === 'Branco'){
          let indice = element.series.findIndex(elemento => elemento.name === (dadoCluster.qtd_branco_invalidas + " (" + dadoCluster.porcentagem_branco_invalida + "%)"))
          if (indice !== -1)
            element.series[indice].value += dadoCluster.volume_incidencias
          else {
            element.series.push({
              "name": String(dadoCluster.qtd_branco_invalidas + " (" + dadoCluster.porcentagem_branco_invalida + "%)"),
              "value": dadoCluster.volume_incidencias
            });
          }
        }
      });
    })
    this.concluido = true;
  }



}
