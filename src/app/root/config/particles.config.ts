import { IParams } from 'angular-particle/lib';
import { ParticleEventModeEnum } from '../enums/particleEventMode.enum';

export class ParticleConfig {
    private _style: object;
    private _params: IParams;

    constructor(numberOfParticles: number, color: string, onClickMode?: ParticleEventModeEnum, onHoverMode?: ParticleEventModeEnum) {
        this._setStyle();
        this._setParams(numberOfParticles, color, onClickMode, onHoverMode);
    }

    private _setStyle(): void {
        this._style ={
			'position': 'fixed',
			'width': '100%',
			'height': '100%',
			'z-index': -1,
			'top': 0,
			'left': 0,
			'right': 0,
			'bottom': 0,
		};
    }

    private _setParams(numberOfParticles: number, color: string, onClickMode?: ParticleEventModeEnum, onHoverMode?: ParticleEventModeEnum): void {
        this._params = <IParams>{
			particles: {
				number: {
					value: numberOfParticles,
				},
				color: {
					value: color
				}
			},
			interactivity: {
				events: {
					onclick: {
						mode: onClickMode || ParticleEventModeEnum.PUSH_MODE
                    },
                    onhover: {
                        mode: onHoverMode || ParticleEventModeEnum.GRAB_MODE
                    }
				}
			}
        };
    }

    getStyle(): object {
        return this._style;
    }

    getParams(): IParams {
        return this._params;
    }
}