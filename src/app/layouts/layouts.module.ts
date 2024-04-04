import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Routing
// import { LayoutsRoutingModule } from './layouts-routing.module';

// Components
import { HeaderModule } from './header/header.module';
import { MegaVerticalMenuModule } from './megaverticalmenu/megaverticalmenu.module';

// Layouts
import { LayoutsComponent } from './layouts.component';
@NgModule({
    imports: [
        // App
        CommonModule,
        RouterModule,
        
        // Routing
        // LayoutsRoutingModule,

        // Components
        HeaderModule,
        MegaVerticalMenuModule
    ],
    declarations: [LayoutsComponent],
    exports: [LayoutsComponent]
})
export class LayoutsModule { }
