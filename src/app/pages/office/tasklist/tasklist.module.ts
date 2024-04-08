import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';

import { TasklistComponent } from './tasklist.component';
import { TasklistRoutingModule } from './tasklist-routing.module';

@NgModule({
    imports: [
        // App
        CommonModule,
        FormsModule,

        // Primeng
        BreadcrumbModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        BadgeModule,

        // Routing
        TasklistRoutingModule
    ],
    declarations: [TasklistComponent]
})
export class TasklistModule { }
