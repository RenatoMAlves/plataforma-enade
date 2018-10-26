import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraTopoComponent } from './barra-topo/barra-topo.component';
import { ResultadosService } from './services/resultados.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraTopoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
