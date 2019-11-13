import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SiteRoutingModule } from './site-routing.module';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { BotanyDisplayComponent } from './botany-display/botany-display.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDisplayComponent,
    NavigationComponent,
    HeaderBarComponent,
    BotanyDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
