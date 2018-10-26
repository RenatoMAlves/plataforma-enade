import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResultadosComponent, InicioComponent]
})
export class ResultadosModule { }
