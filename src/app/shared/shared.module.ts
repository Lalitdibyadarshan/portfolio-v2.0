import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { CvDownloadComponent } from './components/cv-download/cv-download.component';
import { ChangeColorOnScrollDirective } from './directives/changeColorOnScroll.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterMenuComponent,
    CvDownloadComponent,
    ChangeColorOnScrollDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterMenuComponent,
    CvDownloadComponent,
    ChangeColorOnScrollDirective
  ]
})
export class SharedModule { }
