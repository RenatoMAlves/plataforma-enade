import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-topo',
  templateUrl: './barra-topo.component.html',
  styleUrls: ['./barra-topo.component.scss']
})
export class BarraTopoComponent implements OnInit {

  navToggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
