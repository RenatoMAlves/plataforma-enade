import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-resultados',
  templateUrl: './tabela-resultados.component.html',
  styleUrls: ['./tabela-resultados.component.scss']
})
export class TabelaResultadosComponent implements OnInit {

  @Input('dadosTotais') dadosTotais: any;

  constructor() { }

  ngOnInit() {
  }

}
