import { NgModule } from '@angular/core';

// modulos
import { SharedModule } from '../shared/shared.module';

// rutas
import { PAGES_ROUTES } from './pages.routes';

// pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent,
        ProgressComponent,
        Graficas1Component,
        NopagefoundComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        NopagefoundComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }
