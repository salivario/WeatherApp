import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoriteComponent } from './components/modules/favorite/favorite.component';
import { WeatherComponent } from './components/modules/weather/weather.component';
import { BaseComponent } from './components/modules/base/base.component';



const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'favorite', component: FavoriteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
