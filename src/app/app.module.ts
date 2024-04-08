import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages - components
import { NotfoundComponent } from './pages/notfound/notfound.component';

// Layouts  
// import { AuthModule } from './pages/auth/auth.module';
import { LayoutsModule } from './layouts/layouts.module';

// Pages - modules
import { DashboardModule } from './pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    // App
    AppComponent,

    // Pages
    NotfoundComponent
  ],
  imports: [
    // App
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Layouts
    // AuthModule,
    LayoutsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
