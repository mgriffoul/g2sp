import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'g2sp-work-in-progress',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './work-in-progress.component.html',
    styleUrl: './work-in-progress.component.scss',
})
export class WorkInProgressComponent {}
