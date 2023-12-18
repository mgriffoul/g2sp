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
            transition('void => *', animate(`450ms ease-in`)),
        ]),
        trigger('slideInRightBot', [
            state(
                'void',
                style({ opacity: 0, transform: 'translateX(180px)' }),
            ),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`400ms 200ms ease-in`)),
        ]),
        trigger('slideInRightTop', [
            state(
                'void',
                style({ opacity: 0, transform: 'translateX(180px)' }),
            ),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`350ms 500ms ease-in`)),
        ]),
        trigger('slideInLeftTop', [
            state(
                'void',
                style({ opacity: 0, transform: 'translateX(-180px)' }),
            ),
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', animate(`200ms 900ms ease-in`)),
        ]),
    ],
    standalone: true,
})
export class CompetentSectionComponent {
    visibleSections: string[] = [];

    constructor(
        private animationService: G2spAnimationService,
        private elementRef: ElementRef,
    ) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const elementIdToCheck = [
            'competent-1',
            'competent-2',
            'competent-3',
            'competent-4',
        ];
        elementIdToCheck.forEach((elementId) => {
            if (this.visibleSections.includes(elementId)) {
                return;
            }
            const visible = this.animationService.checkVisibility(
                this.elementRef,
                elementId,
            );
            if (visible) {
                this.visibleSections.push(elementId);
            }
        });
    }

    shouldDisplay(id: string) {
        return (
            this.visibleSections.includes(id) &&
            this.visibleSections.includes('competent-4')
        );
    }
}
