import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';

@NgModule({
    imports: [
        CommonModule,

        SidebarModule,
        ButtonModule,
        BreadcrumbModule,

        SummaryRoutingModule
    ],
    declarations: [SummaryComponent]
})
export class SummaryModule { }
