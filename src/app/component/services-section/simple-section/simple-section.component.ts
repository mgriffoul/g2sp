import { Component, ElementRef, HostListener } from '@angular/core';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { ServicesSectionComponent } from '../services-section.component';
import { SimpleSectionItemComponent } from './simple-section-item/simple-section-item.component';
import { G2spAnimationService } from '../../../utils/animations/g2sp-animation.service';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'g2sp-simple-section',
    templateUrl: './simple-section.component.html',
    imports: [
        G2spTranslatePipe,
        ServicesSectionComponent,
        SimpleSectionItemComponent,
    ],
    animations: [
        trigger('slideIn200', [
            state('void', style({ opacity: 0, transform: 'translateX(80px)' })),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`200ms ease-in-out`)),
        ]),
        trigger('slideIn400', [
            state('void', style({ opacity: 0, transform: 'translateX(80px)' })),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`400ms ease-in-out`)),
        ]),
        trigger('slideIn800', [
            state('void', style({ opacity: 0, transform: 'translateX(80px)' })),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`800ms ease-in-out`)),
        ]),
    ],
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
    @HostListener('window:touchstart', ['$event'])
    @HostListener('window:touchmove', ['$event'])
    @HostListener('window:touchend', ['$event'])
    onWindowScroll() {
        this.isSectionVisible = this.sectionHasBeenShown
            ? true
            : this.animationService.checkVisibility(this.elementRef, 'simple');

        if (!this.sectionHasBeenShown && this.isSectionVisible) {
            this.sectionHasBeenShown = true;
        }
    }
}
