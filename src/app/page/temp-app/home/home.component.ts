import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../component/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'g2sp-home',
    standalone: true,
    imports: [CommonModule, HeaderComponent, RouterOutlet],
    templateUrl: './home.component.html',
})
export class HomeComponent {}
