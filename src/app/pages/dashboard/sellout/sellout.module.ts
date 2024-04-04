import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { SelloutComponent } from './sellout.component';
import { SelloutRoutingModule } from './sellout-routing.module';

@NgModule({
    imports: [
        CommonModule,

        SidebarModule,
        ButtonModule,
        BreadcrumbModule,

        SelloutRoutingModule
    ],
    declarations: [SelloutComponent]
})
export class SelloutModule { }
