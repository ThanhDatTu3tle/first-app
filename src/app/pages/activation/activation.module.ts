import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationComponent } from './activation.component';
import { ActivationRoutingModule } from './activation-routing.module';

@NgModule({
    imports: [
        // App
        CommonModule,

        // Routing
        ActivationRoutingModule
    ],
    declarations: [ActivationComponent]
})
export class ActivationModule { }
