import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
    standalone: true,
    imports: [RouterModule, HeaderComponent],
    selector: 'g2sp-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'g2sp';
}
