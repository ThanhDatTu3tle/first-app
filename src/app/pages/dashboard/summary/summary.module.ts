import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Primeng
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

// Highcharts
import { HighchartsChartModule } from 'highcharts-angular';

import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
    
@NgModule({
    imports: [
        // App
        CommonModule,
        FormsModule,

        // Primeng
        SidebarModule,
        ButtonModule,
        BreadcrumbModule,
        ProgressBarModule,
        ToastModule,
        DropdownModule,
        CalendarModule,

        // Highcharts
        HighchartsChartModule,

        SummaryRoutingModule
    ],
    declarations: [SummaryComponent]
})
export class SummaryModule { }
