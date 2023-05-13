import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModuleModule } from './ui/ui-module.module';
import { MainModule } from './modules/main.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UiModuleModule,
    MainModule
  ]
})
export class AllModule { }
