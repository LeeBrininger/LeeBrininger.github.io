import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ProductDisplayComponent } from './product-display/product-display.component'
import { BotanyDisplayComponent } from './botany-display/botany-display.component'
import { ArchivedComponent } from './archived/archived.component';
import { User } from './user.model';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'maps', component: ProductDisplayComponent },
  {path: 'plants', component: BotanyDisplayComponent},
  {path: 'archive', component: ArchivedComponent },
  {path: 'user', component: User },
  {path: 'login', component: LoginComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
