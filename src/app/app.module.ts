import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllModule } from './components/all.module';
import { UiModuleModule } from "./components/ui/ui-module.module";
import { HttpClientModule }   from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AllModule,
        UiModuleModule,
        HttpClientModule
    ]
})
export class AppModule { }
