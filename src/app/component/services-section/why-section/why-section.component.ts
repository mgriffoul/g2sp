import { Component } from '@angular/core';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';
import { WhySectionItemComponent } from './why-section-item/why-section-item.component';

@Component({
    selector: 'g2sp-why-section',
    templateUrl: 'why-section.component.html',
    imports: [
        G2spTranslatePipe,
        ServicesSectionComponent,
        WhySectionItemComponent,
    ],
    standalone: true,
})
export class WhySectionComponent {}
