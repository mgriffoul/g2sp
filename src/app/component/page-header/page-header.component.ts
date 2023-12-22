import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'g2sp-page-header',
    templateUrl: './page-header.component.html',
    standalone: true,
    imports: [MatIconModule, MatButtonModule],
})
export class PageHeaderComponent {
    @Input() iconPath: string = '';

    handleExpandMoreClick() {
        const section = document.getElementById('why');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
