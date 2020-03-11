import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: IntroductionComponent
  },
  {
    path: 'home', component: IntroductionComponent
  }
];

@NgModule({
  declarations: [
    IntroductionComponent
  ],
  exports: [
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IntroductionModule { }
