import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { NotfoundComponent } from './pages/notfound/notfound.component';

// Layouts  
import { LayoutsModule } from './layouts/layouts.module';

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

    // Layouts
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
