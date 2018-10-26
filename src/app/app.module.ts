import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraTopoComponent } from './barra-topo/barra-topo.component';
import { ResultadosService } from './services/resultados.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraTopoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
