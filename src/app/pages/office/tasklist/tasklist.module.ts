import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { TasklistComponent } from './tasklist.component';
import { TasklistRoutingModule } from './tasklist-routing.module';

@NgModule({
    imports: [
        // App
        CommonModule,

        BreadcrumbModule,

        // Routing
        TasklistRoutingModule
    ],
    declarations: [TasklistComponent]
})
export class TasklistModule { }
