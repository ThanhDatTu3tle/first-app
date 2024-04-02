import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { BadgeModule } from 'primeng/badge';

@NgModule({
    imports: [
        CommonModule,
        BadgeModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule { }
