import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { G2spTranslatePipe } from '../../../../pipe/g2sp-translate.pipe';
import { NgClass } from '@angular/common';

@Component({
    selector: 'g2sp-competent-section-item',
    templateUrl: './competent-section-item.component.html',
    imports: [MatCardModule, MatIconModule, G2spTranslatePipe, NgClass],
    standalone: true,
})
export class CompetentSectionItemComponent {
    @Input() iconName: string = '';
    @Input() description: string = '';
    @Input() iconColor: string = '';
}
