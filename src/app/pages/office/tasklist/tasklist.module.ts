import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';


import { TasklistComponent } from './tasklist.component';
import { TasklistRoutingModule } from './tasklist-routing.module';

@NgModule({
    imports: [
        // App
        CommonModule,

        BreadcrumbModule,
        DropdownModule,
        FormsModule,

        // Routing
        TasklistRoutingModule
    ],
    declarations: [TasklistComponent]
})
export class TasklistModule { }
