import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'g2sp-services-section',
    templateUrl: './services-section.component.html',
    imports: [MatIconModule, NgForOf],
    standalone: true,
})
export class ServicesSectionComponent {
    @Input() sectionTitle: string = '';
}
