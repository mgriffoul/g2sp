import { Component, Input } from '@angular/core';

@Component({
    selector: 'g2sp-page-header',
    templateUrl: './page-header.component.html',
    standalone: true,
})
export class PageHeaderComponent {
    @Input() iconPath: string = '';
}
