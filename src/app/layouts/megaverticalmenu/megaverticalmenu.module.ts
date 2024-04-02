import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegaVertiCalMenuComponent } from './megaverticalmenu.component';

import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
    imports: [
        CommonModule,
        MegaMenuModule
    ],
    declarations: [MegaVertiCalMenuComponent],
    exports: [MegaVertiCalMenuComponent]
})
export class MegaVerticalMenuModule { }
