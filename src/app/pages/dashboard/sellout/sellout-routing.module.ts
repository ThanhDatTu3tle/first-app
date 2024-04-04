import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SelloutComponent } from './sellout.component';

@NgModule({
    imports: [RouterModule.forChild([
        { 
            path: '', 
            component: SelloutComponent,
        }
    ])],
    exports: [RouterModule]
})
export class SelloutRoutingModule { }
