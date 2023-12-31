import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ServicesSectionComponent } from '../../../component/services-section/services-section.component';
import { MatListModule } from '@angular/material/list';
import { PageHeaderComponent } from '../../../component/page-header/page-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SimpleSectionItemComponent } from '../../../component/services-section/simple-section/simple-section-item/simple-section-item.component';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { WhySectionItemComponent } from '../../../component/services-section/why-section/why-section-item/why-section-item.component';
import { CompetentSectionItemComponent } from '../../../component/services-section/competent-section/competent-section-item/competent-section-item.component';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { WhySectionComponent } from '../../../component/services-section/why-section/why-section.component';
import { SimpleSectionComponent } from '../../../component/services-section/simple-section/simple-section.component';
import { CompetentSectionComponent } from '../../../component/services-section/competent-section/competent-section.component';

@Component({
    selector: 'g2sp-services',
    standalone: true,
    imports: [
        PageHeaderComponent,
        WhySectionComponent,
        SimpleSectionComponent,
        CompetentSectionComponent,
    ],
    templateUrl: './services.component.html',
    animations: [
        trigger('fadeIn', [
            state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
            state('*', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', animate('800ms ease-in-out')),
        ]),
    ],
})
export class ServicesComponent {}
