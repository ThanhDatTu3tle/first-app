import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Primeng
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProgressBarModule } from 'primeng/progressbar';

// Highcharts
import { HighchartsChartModule } from 'highcharts-angular';

import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,

        // Primeng
        SidebarModule,
        ButtonModule,
        BreadcrumbModule,
        ProgressBarModule,
        ToastModule,

        // Highcharts
        HighchartsChartModule,

        SummaryRoutingModule
    ],
    declarations: [SummaryComponent]
})
export class SummaryModule { }
