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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ArchivedComponent } from './archived/archived.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDisplayComponent,
    NavigationComponent,
    HeaderBarComponent,
    BotanyDisplayComponent,
    UserComponent,
    ArchivedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
