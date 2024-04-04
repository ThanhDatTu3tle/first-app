import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ProgressBarModule } from 'primeng/progressbar';

import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,

        SidebarModule,
        ButtonModule,
        BreadcrumbModule,
        ProgressBarModule,
        ToastModule,

        SummaryRoutingModule
    ],
    declarations: [SummaryComponent]
})
export class SummaryModule { }
