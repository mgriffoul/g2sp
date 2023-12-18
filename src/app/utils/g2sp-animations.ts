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
    transition('void => *', animate('800ms ease-in-out')),
]);
