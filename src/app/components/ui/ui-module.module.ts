import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    MenubarModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})
export class UiModuleModule { 
  
}
