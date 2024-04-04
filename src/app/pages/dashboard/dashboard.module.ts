import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardsRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        // App
        CommonModule,

        // Routing
        DashboardsRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
