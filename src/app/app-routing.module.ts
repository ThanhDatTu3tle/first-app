// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { NotfoundComponent } from './pages/notfound/notfound.component';
// import { LoginGuard } from './pages/auth/login/login.guard';


// const routes: Routes = [
//   {
//     path: '', 
//     loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule),
//     // outlet: 'main-outlet',
//     canActivate: [LoginGuard]
//   },
//   { 
//     path: 'auth', 
//     loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
//     // outlet: 'main-outlet' 
//   },
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'notfound', component: NotfoundComponent },
//   { path: '**', redirectTo: '/notfound' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginGuard } from './pages/auth/login/login.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OfficeComponent } from './pages/office/office.component';
import { ActivationComponent } from './pages/activation/activation.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '', component: LayoutsComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', component: DashboardComponent, loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'workfollow', component: OfficeComponent, loadChildren: () => import('./pages/office/office.module').then(m => m.OfficeModule) },
      { path: 'activation', component: ActivationComponent, loadChildren: () => import('./pages/activation/activation.module').then(m => m.ActivationModule) },
      { path: 'user-profile', component: UserProfileComponent, loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule) },
    ]
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
