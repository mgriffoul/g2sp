import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
    selector: 'g2sp-temp-app',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
    templateUrl: './temp-app.component.html',
    styleUrl: './temp-app.component.scss',
})
export class TempAppComponent {}
