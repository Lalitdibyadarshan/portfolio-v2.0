import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './aboutComponent/about.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
	{
		path: '', component: AboutComponent
	}
]

@NgModule({
	declarations: [
		AboutComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(route)
	]
})
export class AboutModule { }
