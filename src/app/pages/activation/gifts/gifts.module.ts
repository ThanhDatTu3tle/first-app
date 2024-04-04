import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { GiftsComponent } from './gifts.component';
import { GiftsRoutingModule } from './gifts-routing.module';

@NgModule({
    imports: [
        CommonModule,

        BreadcrumbModule,

        GiftsRoutingModule
    ],
    declarations: [GiftsComponent]
})
export class GiftsModule { }
