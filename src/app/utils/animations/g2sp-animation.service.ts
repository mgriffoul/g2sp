import { ElementRef, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class G2spAnimationService {
    checkVisibility(elementRef: ElementRef, id: string): boolean {
        const element = elementRef.nativeElement.querySelector(`#${id}`);
        const bounding2 = element?.getBoundingClientRect();
        if (id === 'why' && bounding2) {
            console.log('bounding.top >= 0', bounding2.top >= 0);
            console.log(
                'bounding.bottom >= ...',
                bounding2.bottom,
                window.innerHeight,
                document.documentElement.clientHeight,
            );
        }

        if (element) {
            const bounding = element.getBoundingClientRect();

            return (
                bounding.top >= 0 &&
                bounding.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight)
            );
        }
        return false;
    }
}
