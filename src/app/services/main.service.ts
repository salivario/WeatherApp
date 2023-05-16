import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICapital } from '../interfaces/icapital';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  favorite: string[] = [];
  localStorage: Storage = window.localStorage;

  constructor(private http: HttpClient) { }

  get(url: string): Observable<ICapital> {
    return this.http.get<ICapital>(url);
  }

  addToFV(name: string | null) {
    if (name === null) {
      // Обработка случая, когда значение равно null
      return;
    }
  
    const favorites = JSON.parse(this.localStorage.getItem("favorites") || "[]");
    const index = favorites.findIndex((fav: string) => JSON.stringify(fav) === JSON.stringify(name));
  
    if (index > -1) {
      favorites.splice(index, 1);
    }
  
    favorites.push(name);
    this.localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  getFV(): Observable<ICapital[]> {
    const localStorageData = this.localStorage.getItem("favorites");
    const favorites = localStorageData ? JSON.parse(localStorageData) : [];
  
    // Создание массива Observable для каждого элемента
    const observables: Observable<ICapital>[] = favorites.map((elem: string) =>
      this.get(`http://api.openweathermap.org/data/2.5/forecast?q=${elem}&appid=50755a3140285d52c3e6541fe3869861`)
    );
  
    return forkJoin(observables);
  }
}
