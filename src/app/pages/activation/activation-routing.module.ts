import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivationComponent } from './activation.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ActivationComponent,
            children: [
                { 
                    path: 'gifts',
                    loadChildren: () => import('./gifts/gifts.module').then(m => m.GiftsModule) 
                },
                { 
                    path: 'promotion',
                    loadChildren: () => import('./promotion/promotion.module').then(m => m.PromotionModule) 
                }
            ] 
         }
    ])],
    exports: [RouterModule]
})
export class ActivationRoutingModule { }
