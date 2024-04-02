import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutsComponent } from './layouts.component';

// Components - Layouts
import { HeaderModule } from './header/header.module';
import { MegaVerticalMenuModule } from './megaverticalmenu/megaverticalmenu.module';

@NgModule({
    imports: [
        // App
        CommonModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,

        // Components - Layouts
        HeaderModule,
        MegaVerticalMenuModule
    ],
    declarations: [LayoutsComponent],
    exports: [LayoutsComponent]
})
export class LayoutsModule { }
