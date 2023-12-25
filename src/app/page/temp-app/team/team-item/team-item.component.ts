import { Component, Input, OnInit } from '@angular/core';
import { G2spTranslatePipe } from '../../../../pipe/g2sp-translate.pipe';
import { NgForOf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'g2sp-team-item',
    templateUrl: 'team-item.component.html',
    imports: [G2spTranslatePipe, NgForOf, MatDividerModule],
    animations: [
        trigger('fadeIn', [
            state('visible', style({ opacity: 1 })),
            transition('void => visible', [
                style({ opacity: 0 }),
                animate('800ms ease-in-out'),
            ]),
        ]),
    ],
    standalone: true,
})
export class TeamItemComponent implements OnInit {
    @Input() teamMemberLoco = '';
    @Input() bioChapter: string[] = [];
    @Input() imgPath: string = '';

    animationState = 'visible';

    ngOnInit() {
        setTimeout(() => {
            this.animationState = 'visible';
        }, 300);
    }
}
