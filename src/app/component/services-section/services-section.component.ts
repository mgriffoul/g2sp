import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgForOf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'g2sp-services-section',
    templateUrl: './services-section.component.html',
    imports: [MatIconModule, NgForOf, MatDividerModule, NgClass],
    standalone: true,
})
export class ServicesSectionComponent {
    @Input() sectionTitle: string = '';
    @Input() alignTitle: 'left' | 'middle' = 'middle';
}
