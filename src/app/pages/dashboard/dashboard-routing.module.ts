import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent,
            children: [
                { 
                    path: 'dashboard', 
                    loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule)
                },
                { 
                    path: 'dashboard-sellout', 
                    loadChildren: () => import('./sellout/sellout.module').then(m => m.SelloutModule)
                }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
