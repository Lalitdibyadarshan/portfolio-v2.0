import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParticlesModule } from 'angular-particle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { IntroductionModule } from './introduction/introduction.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ParticlesModule,
		SharedModule,
		IntroductionModule // TODO: remove this and implement lazy loading
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
