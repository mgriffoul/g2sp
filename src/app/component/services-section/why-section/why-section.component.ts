import { Component, ElementRef, HostListener } from '@angular/core';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';
import { WhySectionItemComponent } from './why-section-item/why-section-item.component';
import { G2spAnimationService } from '../../../utils/animations/g2sp-animation.service';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'g2sp-why-section',
    templateUrl: 'why-section.component.html',
    imports: [
        G2spTranslatePipe,
        ServicesSectionComponent,
        WhySectionItemComponent,
    ],
    animations: [
        trigger('fadeIn', [
            state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
            state('*', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', animate('400ms ease-in-out')),
        ]),
        trigger('fadeIn2', [
            state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
            state('*', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', animate('400ms 100ms ease-in-out')),
        ]),
        trigger('fadeIn3', [
            state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
            state('*', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', animate('400ms 150ms ease-in-out')),
        ]),
        trigger('fadeIn4', [
            state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
            state('*', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', animate('400ms 250ms ease-in-out')),
        ]),
    ],
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
