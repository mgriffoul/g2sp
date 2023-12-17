import { Component, ElementRef, HostListener } from '@angular/core';
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
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

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
    animations: [
        trigger('fadeIn', [
            state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
            state('*', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', animate('800ms ease-in-out')),
        ]),
    ],
})
export class ServicesComponent {
    isWhyVisible = false;
    private whyHasBeenShown = false;

    isSimpleVisible = false;
    private isSimpleHasBeenShown = false;

    isCompetentVisible = false;
    private isCompetentHasBeenShown = false;

    constructor(private elementRef: ElementRef) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isWhyVisible = this.whyHasBeenShown
            ? true
            : this.checkVisibility('why');
        this.isSimpleVisible = this.isSimpleHasBeenShown
            ? true
            : this.checkVisibility('simple');
        this.isCompetentVisible = this.isCompetentHasBeenShown
            ? true
            : this.checkVisibility('competent');
    }

    private checkVisibility(id: string): boolean {
        const element = this.elementRef.nativeElement.querySelector(`#${id}`);
        if (element) {
            const bounding = element.getBoundingClientRect();
            const isVisible =
                bounding.top >= 0 &&
                bounding.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight);

            if (isVisible) {
                this.changeElementDisplayState(id);
            }

            return isVisible;
        }
        return false;
    }

    changeElementDisplayState(id: string) {
        if (id === 'why') {
            this.whyHasBeenShown = true;
        }
        if (id === 'simple') {
            this.isSimpleHasBeenShown = true;
        }
        if (id === 'competent') {
            this.isCompetentHasBeenShown = true;
        }
    }
}
