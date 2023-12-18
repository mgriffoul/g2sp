import { Component, ElementRef, HostListener } from '@angular/core';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';
import { SimpleSectionItemComponent } from './simple-section-item/simple-section-item.component';
import { G2spAnimationService } from '../../../utils/animations/g2sp-animation.service';
import {
    G2spFadeIn,
    G2spSlideIn,
    G2spSlideInSlow,
    G2spSlideInVerySlow,
} from '../../../utils/animations/g2sp-animations';

@Component({
    selector: 'g2sp-simple-section',
    templateUrl: './simple-section.component.html',
    imports: [
        G2spTranslatePipe,
        ServicesSectionComponent,
        SimpleSectionItemComponent,
    ],
    animations: [G2spSlideInSlow, G2spSlideIn, G2spSlideInVerySlow],
    standalone: true,
})
export class SimpleSectionComponent {
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
            : this.animationService.checkVisibility(this.elementRef, 'simple');

        if (!this.sectionHasBeenShown && this.isSectionVisible) {
            this.sectionHasBeenShown = true;
        }
    }
}
