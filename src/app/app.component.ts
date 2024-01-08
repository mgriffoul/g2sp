import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { G2spFooterComponent } from './component/footer/g2sp-footer.component';

@Component({
    standalone: true,
    imports: [RouterModule, HeaderComponent, G2spFooterComponent],
    selector: 'g2sp-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'g2sp';
}
