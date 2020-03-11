import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '', redirectTo: '/home', pathMatch: 'full'
	},
	{
		path: 'home', loadChildren: './introduction/introduction.module#IntroductionModule'
	},
	{
		path: 'about', loadChildren: './about/about.module#AboutModule'
	},
	{
		path: 'blog', loadChildren: './blog/blog.module#BlogModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
