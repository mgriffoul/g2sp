import { Component, Input } from '@angular/core';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'g2sp-why-section',
    templateUrl: './why-section.component.html',
    imports: [G2spTranslatePipe, MatIconModule],
    standalone: true,
})
export class WhySectionComponent {
    @Input() iconName: string = '';
    @Input() description: string = '';
}
