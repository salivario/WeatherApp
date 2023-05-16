import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ICapital } from 'src/app/interfaces/icapital';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit{
  constructor(private mainServ: MainService, private FormBuilder: FormBuilder){}
    form!: FormGroup;
    isTrue!: boolean;
    capitalCity!: ICapital;
    capitalCitiesSub!: Subscription;
    search!:string ;
    ngOnInit(){
      this.form = this.FormBuilder.group({
        search: [''],
      });

    }
    postfavorite(name: string){
      this.mainServ.addToFV(name)
    }
    submit(){
      this.search = this.form.value.search
      this.capitalCitiesSub = this.mainServ.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.search}&appid=50755a3140285d52c3e6541fe3869861`).subscribe(data => this.capitalCity = data);
    }
}
