import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const G2spFadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
    state('*', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void => *', animate('400ms ease-in-out')),
]);

export const G2spSlideIn = trigger('slideIn', [
    state('void', style({ opacity: 0, transform: 'translateX(80px)' })),
    state('*', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('void => *', animate('200ms ease-in-out')),
]);

export const G2spSlideInSlow = trigger('slideInSlow', [
    state('void', style({ opacity: 0, transform: 'translateX(80px)' })),
    state('*', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('void => *', animate('400ms ease-in-out')),
]);

export const G2spSlideInVerySlow = trigger('slideInVerySlow', [
    state('void', style({ opacity: 0, transform: 'translateX(80px)' })),
    state('*', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('void => *', animate('800ms ease-in-out')),
]);
