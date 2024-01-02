import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { G2spTranslatePipe } from '../../pipe/g2sp-translate.pipe';

@Component({
    selector: 'g2sp-services-section',
    templateUrl: './services-section.component.html',
    imports: [
        MatIconModule,
        NgForOf,
        MatDividerModule,
        NgClass,
        G2spTranslatePipe,
        NgIf,
    ],
    standalone: true,
})
export class ServicesSectionComponent {
    @Input() sectionTitle: string = '';
    @Input() noDivider = false;
}
