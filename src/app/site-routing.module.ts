import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ProductDisplayComponent } from './product-display/product-display.component'
import { BotanyDisplayComponent } from './botany-display/botany-display.component'



const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: 'maps', component: ProductDisplayComponent },
  {path: 'plants', component: BotanyDisplayComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
