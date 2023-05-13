import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';
import { WeatherComponent } from './weather/weather.component';
import { AdminComponent } from './admin/admin.component';
import { BaseComponent } from './base/base.component';



@NgModule({
  declarations: [
    FavoriteComponent,
    WeatherComponent,
    AdminComponent,
    BaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FavoriteComponent,
    WeatherComponent,
    AdminComponent,
    BaseComponent
  ]
})
export class MainModule { }
