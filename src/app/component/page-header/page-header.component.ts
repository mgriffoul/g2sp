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
        const section = document.getElementById('g2sp-header');
        if (section) {
            const targetOffset =
                section.getBoundingClientRect().top + window.scrollY;
            const scrollToPosition = targetOffset + 700; // Décale de 200px vers le haut

            window.scroll({
                top: scrollToPosition,
                behavior: 'smooth',
            });
        }
    }
}
