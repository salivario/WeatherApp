import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';
import { BaseComponent } from './base/base.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CountryPipe } from 'src/app/pipes/country.pipe';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    FavoriteComponent,
    BaseComponent,
    CountryPipe,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    FavoriteComponent,
    BaseComponent,
    ErrorComponent
  ]
})
export class MainModule { }
