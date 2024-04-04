import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OfficeComponent } from "./office.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: OfficeComponent,
            children: [
                {
                    path: 'task-list',
                    loadChildren: () => import('./tasklist/tasklist.module').then(m => m.TasklistModule)
                }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class OfficeRoutingModule { }
