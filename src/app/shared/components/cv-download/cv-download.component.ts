import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-cv-download',
	templateUrl: './cv-download.component.html',
	styleUrls: ['./cv-download.component.scss']
})
export class CvDownloadComponent implements OnInit {

	@Input() showButton: boolean;
	ngOnInit() {
        
	}
}
