import { Pipe, PipeTransform } from '@angular/core';
import { TRANSLATION_REFERENTIAL } from '../utils/translation/translation.referential';

@Pipe({
    name: 'g2spTranslate',
    standalone: true,
})
export class G2spTranslatePipe implements PipeTransform {
    transform(value: string): any {
        return TRANSLATION_REFERENTIAL[value] ?? value;
    }
}
