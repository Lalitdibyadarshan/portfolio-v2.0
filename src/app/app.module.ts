import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParticlesModule } from 'angular-particle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { IntroductionModule } from './introduction/introduction.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ParticlesModule,
		IntroductionModule // TODO: remove this and implement lazy loading
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
