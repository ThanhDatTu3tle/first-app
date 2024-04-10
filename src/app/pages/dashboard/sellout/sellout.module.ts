import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';

import { SelloutComponent } from './sellout.component';
import { SelloutRoutingModule } from './sellout-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        // Primeng
        SidebarModule,
        ButtonModule,
        BreadcrumbModule,
        CalendarModule,

        SelloutRoutingModule
    ],
    declarations: [SelloutComponent]
})
export class SelloutModule { }
