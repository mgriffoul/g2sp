import { Component } from '@angular/core';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';
import { SimpleSectionItemComponent } from './simple-section-item/simple-section-item.component';

@Component({
    selector: 'g2sp-simple-section',
    templateUrl: './simple-section.component.html',
    imports: [
        G2spTranslatePipe,
        ServicesSectionComponent,
        SimpleSectionItemComponent,
    ],
    standalone: true,
})
export class SimpleSectionComponent {}
