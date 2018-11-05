import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-resultado',
  templateUrl: './grafico-resultado.component.html',
  styleUrls: ['./grafico-resultado.component.scss']
})
export class GraficoResultadoComponent implements OnInit {

  @Input('dadosResultado') dadosResultado: any;
  @Input('cores') colorScheme: any;
  @Input('label') labelX: any;
  @Input('ano') ano: any;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  legendTitle = '';
  xAxisLabel = '';
  showYAxisLabel = true;  
  yAxisLabel = 'Volume de Incidências';
  autoScale = true;

  constructor() { }

  ngOnInit() {
    this.xAxisLabel = this.labelX;
    this.legendTitle = "Ano: "+ this.ano;
  }

}
