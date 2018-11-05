import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados/resultados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficoResultadoComponent } from './grafico-resultado/grafico-resultado.component';
import { TabelaResultadosComponent } from './tabela-resultados/tabela-resultados.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [ResultadosComponent, GraficoResultadoComponent, TabelaResultadosComponent]
})
export class ResultadosModule { }
