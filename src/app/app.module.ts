import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraTopoComponent } from './barra-topo/barra-topo.component';
import { ResultadosService } from './services/resultados.service';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosModule } from './resultados/resultados.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraTopoComponent,
    FooterComponent,
    InicioComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ResultadosModule,
    AppRoutingModule
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
