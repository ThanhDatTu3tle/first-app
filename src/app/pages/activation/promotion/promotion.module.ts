import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { PromotionComponent } from './promotion.component';
import { PromotionRoutingModule } from './promotion-routing.module';

@NgModule({
    imports: [
        CommonModule,

        BreadcrumbModule,

        PromotionRoutingModule
    ],
    declarations: [PromotionComponent]
})
export class PromotionModule { }
