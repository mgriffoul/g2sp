import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';

@Component({
    selector: 'g2sp-legal-mentions-modal',
    template: `
        <mat-dialog-content class="p-32">
            <img
                [src]="'assets/logo.svg'"
                class="h-12 w-full pr-2"
                alt="logo"
            />
            <p>Société par Actions Simplifiée au capital de 1.020 euros</p>
            <p>RCS Nanterre : 980 591 572</p>
            <p>TVA intracommunautaire : FR</p>
            <p>Adresse : 12 Avenue de la Paix 92190 Meudon – France</p>
            <p>E-mail : contact&#64;g2sp-experts.com</p>
            <p>Président : François Pistre / Directeur général : Bruno Simon</p>
        </mat-dialog-content>
    `,
    imports: [MatDialogContent],
    standalone: true,
})
export class LegalMentionsModalComponent {}
