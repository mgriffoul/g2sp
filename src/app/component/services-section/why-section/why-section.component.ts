import { Component, ElementRef, HostListener } from '@angular/core';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';
import { WhySectionItemComponent } from './why-section-item/why-section-item.component';
import { G2spFadeIn } from '../../../utils/animations/g2sp-animations';
import { G2spAnimationService } from '../../../utils/animations/g2sp-animation.service';

@Component({
    selector: 'g2sp-why-section',
    templateUrl: 'why-section.component.html',
    imports: [
        G2spTranslatePipe,
        ServicesSectionComponent,
        WhySectionItemComponent,
    ],
    animations: [G2spFadeIn],
    standalone: true,
})
export class WhySectionComponent {
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
