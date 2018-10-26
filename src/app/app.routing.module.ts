import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ResultadosComponent } from './resultados/resultados/resultados.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent,
    },
    {
        path: 'resultados',
        component: ResultadosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }