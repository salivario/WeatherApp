import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';
import { WeatherComponent } from './weather/weather.component';
import { BaseComponent } from './base/base.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CountryPipe } from 'src/app/pipes/country.pipe';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FavoriteComponent,
    WeatherComponent,
    BaseComponent,
    CountryPipe
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FavoriteComponent,
    WeatherComponent,
    BaseComponent
  ]
})
export class MainModule { }
