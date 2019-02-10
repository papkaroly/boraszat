import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { TermekekComponent } from './termekek/termekek.component';
import { VendeghazComponent } from './vendeghaz/vendeghaz.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ConfigService } from './config.service';


@NgModule({
  declarations: [
    AppComponent,
    RolunkComponent,
    TermekekComponent,
    VendeghazComponent,
    KapcsolatComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    NavmenuComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
