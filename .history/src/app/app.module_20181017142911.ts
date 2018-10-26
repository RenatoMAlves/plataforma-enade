import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraTopoComponent } from './barra-topo/barra-topo.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosModule } from './resultados/resultados.module';

@NgModule({
  declarations: [
    AppComponent,
    BarraTopoComponent,
    FooterComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    ResultadosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
