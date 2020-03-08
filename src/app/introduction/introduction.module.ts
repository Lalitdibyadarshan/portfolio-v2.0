import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';



@NgModule({
  declarations: [
    IntroductionComponent
  ],
  exports: [
    IntroductionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IntroductionModule { }
