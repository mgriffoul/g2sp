import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { HeaderItemComponent } from './header-item/header-item.component';

@Component({
    selector: 'g2sp-header',
    standalone: true,
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatRippleModule,
        HeaderItemComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    onClickCategory(services: string, cool?: string) {
        if (services === 'SERVICES') {
        }
        if (services === 'TEAM') {
        }
        if (services === 'CONTACT') {
        }
        console.log(services);
    }
}
