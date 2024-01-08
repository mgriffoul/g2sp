import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { G2spFooterComponent } from '../../component/footer/g2sp-footer.component';

@Component({
    selector: 'g2sp-temp-app',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, G2spFooterComponent],
    templateUrl: './temp-app.component.html',
})
export class TempAppComponent {}
