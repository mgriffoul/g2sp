import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'g2sp-simple-section-item',
    templateUrl: './simple-section-item.component.html',
    imports: [MatIconModule],
    standalone: true,
})
export class SimpleSectionItemComponent {
    @Input() iconName: string = '';
    @Input() description: string = '';
}
