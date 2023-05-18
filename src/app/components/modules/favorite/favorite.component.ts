import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ICapital } from 'src/app/interfaces/icapital';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit{
  constructor(private serviсe: MainService){}
  favorite$!: Observable<ICapital[]>
  forSearch!: string[];
  ngOnInit(): void {
    this.updateFavoriteList();
  }

  removeFromFV(name: string) {
    this.serviсe.removeFromFV(name);
    this.updateFavoriteList();
  }

  private updateFavoriteList() {
    this.favorite$ = this.serviсe.getFV();
  }

}
