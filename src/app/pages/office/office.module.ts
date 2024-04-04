import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { OfficeComponent } from './office.component';
import { OfficeRoutingModule } from './office-routing.module';

@NgModule({
    imports: [
        CommonModule,

        BreadcrumbModule,
        
        OfficeRoutingModule
    ],
    declarations: [OfficeComponent]
})
export class OfficeModule { }
