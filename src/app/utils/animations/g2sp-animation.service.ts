import { ElementRef, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class G2spAnimationService {
    checkVisibility(elementRef: ElementRef, id: string): boolean {
        const element = elementRef.nativeElement.querySelector(`#${id}`);
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
