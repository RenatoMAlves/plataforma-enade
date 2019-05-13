import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associacao',
  templateUrl: './associacao.component.html',
  styleUrls: ['./associacao.component.scss']
})
export class AssociacaoComponent implements OnInit {
  public teste: any[] = [
    {
      "name": "Sudeste - 4",
      "value": 5368
    },
    {
      "name": "Universidade - 4",
      "value": 7053
    },
    {
      "name": "Privada - 4",
      "value": 7871
    },
    {
      "name": "Sudeste,Universidade - 4",
      "value": 4359
    },
    {
      "name": "Privada,Sudeste - 4",
      "value": 4144
    },
    {
      "name": "Privada,Universidade - 4",
      "value": 4516
    },
    {
      "name": "Privada,Sudeste,Universidade",
      "value": 3208
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
