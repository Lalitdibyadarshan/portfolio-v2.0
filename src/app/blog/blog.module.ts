import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blogComponent/blog.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
	{
		path: '', component: BlogComponent
	}
]

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class BlogModule { }
