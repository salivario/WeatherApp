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
  constructor(private servise: MainService){}
  favorite$!: Observable<ICapital[]>
  forSearch!: string[];
  ngOnInit(): void {
    this.favorite$ = this.servise.getFV();
    console.log(this.favorite$)
  }


}
