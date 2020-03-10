import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { WindowRefService } from '../services/windowRef.service';

@Directive({
    selector: '[appChangeColorOnScroll]'
})
export class ChangeColorOnScrollDirective {
    constructor(private _el: ElementRef, private _renderer: Renderer2, private _windowService: WindowRefService) { }

    @HostListener('window:scroll') onMouseLeave() {
        const isScrolled = this._windowService.nativeWindow.pageYOffset > 12;
        this.changeBackground(isScrolled);
    }

    changeBackground(isChange: boolean) {
        isChange ?
        this._renderer.addClass(this._el.nativeElement, 'background--black') :
        this._renderer.removeClass(this._el.nativeElement, 'background--black');
    }
}