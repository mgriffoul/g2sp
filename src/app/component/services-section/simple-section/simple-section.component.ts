import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'g2sp-simple-section',
    templateUrl: './simple-section.component.html',
    imports: [MatIconModule],
    standalone: true,
})
export class SimpleSectionComponent {
    @Input() iconName: string = '';
    @Input() description: string = '';
}
