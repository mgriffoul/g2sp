import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2spTranslatePipe } from '../../../pipe/g2sp-translate.pipe';
import { MatListModule } from '@angular/material/list';
import { TeamItemComponent } from './team-item/team-item.component';

@Component({
    selector: 'g2sp-team',
    standalone: true,
    imports: [
        CommonModule,
        G2spTranslatePipe,
        MatListModule,
        TeamItemComponent,
    ],
    templateUrl: './team.component.html',
})
export class TeamComponent {}
