import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginGuard } from './pages/auth/login/login.guard';

const routes: Routes = [
  {
    path: '', component: LayoutsComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'user-profile', loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule) },
    ]
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
