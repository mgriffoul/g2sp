import { Component } from '@angular/core';
import { CompetentSectionItemComponent } from './competent-section-item/competent-section-item.component';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';

@Component({
    selector: 'g2sp-competent-section',
    templateUrl: './competent-section.component.html',
    imports: [
        CompetentSectionItemComponent,
        G2spTranslatePipe,
        ServicesSectionComponent,
    ],
    standalone: true,
})
export class CompetentSectionComponent {}
