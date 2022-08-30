import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CustomsComponent } from './customs/customs.component';

@NgModule({
  declarations: [
    MainPageComponent,
    CustomsComponent
  ],

  exports: [
    MainPageComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
