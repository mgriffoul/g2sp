import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';

@Component({
    selector: 'g2sp-temp-app',
    styleUrls: ['./temp-app.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
    templateUrl: './temp-app.component.html',
})
export class TempAppComponent {}
