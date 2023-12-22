import { Component, ElementRef, HostListener } from '@angular/core';
import { CompetentSectionItemComponent } from './competent-section-item/competent-section-item.component';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';
import { G2spAnimationService } from '../../../utils/animations/g2sp-animation.service';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'g2sp-competent-section',
    templateUrl: './competent-section.component.html',
    imports: [
        CompetentSectionItemComponent,
        G2spTranslatePipe,
        ServicesSectionComponent,
    ],
    animations: [
        trigger('slideInLeftBot', [
            state(
                'void',
                style({ opacity: 0, transform: 'translateX(-180px)' }),
            ),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`450ms 600ms ease-in`)),
        ]),
        trigger('slideInRightBot', [
            state(
                'void',
                style({ opacity: 0, transform: 'translateX(-180px)' }),
            ),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`400ms 900ms ease-in`)),
        ]),
        trigger('slideInRightTop', [
            state(
                'void',
                style({ opacity: 0, transform: 'translateX(-180px)' }),
            ),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`350ms 300ms ease-in`)),
        ]),
        trigger('slideInLeftTop', [
            state(
                'void',
                style({ opacity: 0, transform: 'translateX(-180px)' }),
            ),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`200ms ease-in`)),
        ]),
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
    @HostListener('window:touchstart', ['$event'])
    @HostListener('window:touchmove', ['$event'])
    @HostListener('window:touchend', ['$event'])
    onWindowScroll() {
        this.isSectionVisible = this.sectionHasBeenShown
            ? true
            : this.animationService.checkVisibility(
                  this.elementRef,
                  'competent',
              );

        if (!this.sectionHasBeenShown && this.isSectionVisible) {
            this.sectionHasBeenShown = true;
        }
    }
}
