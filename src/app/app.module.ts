import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { MegaVertiCalMenuComponent } from './components/megaverticalmenu/megaverticalmenu.component';

// Pages
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

// Primeng
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    // App
    AppComponent,

    // Components
    HeaderComponent,
    MegaVertiCalMenuComponent,

    // Pages
    UserProfileComponent
  ],
  imports: [
    // App
    BrowserModule,
    AppRoutingModule,

    // Primeng
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
