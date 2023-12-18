import { Component, ElementRef, HostListener } from '@angular/core';
import { CompetentSectionItemComponent } from './competent-section-item/competent-section-item.component';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';
import { G2spAnimationService } from '../../../utils/animations/g2sp-animation.service';

@Component({
    selector: 'g2sp-competent-section',
    templateUrl: './competent-section.component.html',
    imports: [
        CompetentSectionItemComponent,
        G2spTranslatePipe,
        ServicesSectionComponent,
    ],
    standalone: true,
})
export class CompetentSectionComponent {
    isSectionVisible = false;
    private sectionHasBeenShown = false;

    constructor(
        private animationService: G2spAnimationService,
        private elementRef: ElementRef,
    ) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isSectionVisible = this.sectionHasBeenShown
            ? true
            : this.animationService.checkVisibility(this.elementRef, 'why');

        if (!this.sectionHasBeenShown && this.isSectionVisible) {
            this.sectionHasBeenShown = true;
        }
    }
}
