import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ServicesSectionComponent } from '../../../component/services-section/services-section.component';
import { MatListModule } from '@angular/material/list';
import { PageHeaderComponent } from '../../../component/page-header/page-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SimpleSectionComponent } from '../../../component/services-section/simple-section/simple-section.component';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { WhySectionComponent } from '../../../component/services-section/why-section/why-section.component';
import { CompetentSectionComponent } from '../../../component/services-section/competent-section/competent-section.component';

@Component({
    selector: 'g2sp-services',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        ServicesSectionComponent,
        MatListModule,
        PageHeaderComponent,
        MatButtonModule,
        MatCardModule,
        SimpleSectionComponent,
        G2spTranslatePipe,
        WhySectionComponent,
        CompetentSectionComponent,
    ],
    templateUrl: './services.component.html',
})
export class ServicesComponent {}
