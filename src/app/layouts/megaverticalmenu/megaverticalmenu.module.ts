import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegaMenuModule } from 'primeng/megamenu';

import { MegaVertiCalMenuComponent } from './megaverticalmenu.component';


@NgModule({
    imports: [
        CommonModule,

        MegaMenuModule
    ],
    declarations: [MegaVertiCalMenuComponent],
    exports: [MegaVertiCalMenuComponent]
})
export class MegaVerticalMenuModule { }
