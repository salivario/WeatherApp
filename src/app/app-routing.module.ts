import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoriteComponent } from './components/modules/favorite/favorite.component';
import { BaseComponent } from './components/modules/base/base.component';
import { ErrorComponent } from './components/modules/error/error.component';



const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
