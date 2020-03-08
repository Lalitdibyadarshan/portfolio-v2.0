import { Component, OnInit } from '@angular/core';
import { IParams } from 'angular-particle/lib';
import { ParticleConfig } from './config/particles.config';
import { ParticleEventModeEnum } from './enums/particleEventMode.enum';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	myStyle: object = {};
	myParams: IParams;
	width: number = 100;
	height: number = 100;

	private _numberOfParticles = 30;
	private _particleColor = '#ffffff';


	ngOnInit() {
		const particleConfig = new ParticleConfig(
			this._numberOfParticles,
			this._particleColor,
			ParticleEventModeEnum.REPULSE_MODE
		);
		this.myStyle = particleConfig.getStyle();
		this.myParams = particleConfig.getParams()
	}
}
