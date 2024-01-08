import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {
    MatDialog,
    MatDialogConfig,
    MatDialogModule,
} from '@angular/material/dialog';
import { LegalMentionsModalComponent } from './legal-mentions/legal-mentions-modal.component';
import { PrivacyPolicyModalComponent } from './privacy-policy/privacy-policy-modal.component';

@Component({
    selector: 'g2sp-footer',
    template: `
        <div class="bg-white opacity-0 ">
            <span class="z-50 mt-6 h-64 sm:text-xs whitespace-break-spaces">
                &copy;2024
                <a href="www.g2sp-experts.com/#" class="text-blue-500"
                    >www.g2sp-experts.com</a
                >
                |
                <a href="mailto:contact@g2sp-experts.com" class="text-blue-500"
                    >contact&#64;g2sp-experts.com</a
                >
                |
                <span class="cursor-pointer" (click)="handleLegalMentionClick()"
                    >Mentions légales</span
                >
                |
                <span
                    class="cursor-pointer"
                    (click)="handlePrivacyPolicyClick()"
                    >Politique de confidentialité</span
                >
            </span>
        </div>
    `,
    imports: [MatListModule, MatDialogModule],
    standalone: true,
})
export class G2spFooterComponent {
    constructor(private matDialog: MatDialog) {}

    handleLegalMentionClick() {
        const defaultConfig: MatDialogConfig = {
            autoFocus: false,
            width: '600px',
        };
        return this.matDialog.open(LegalMentionsModalComponent, defaultConfig);
    }

    handlePrivacyPolicyClick() {
        const defaultConfig: MatDialogConfig = {
            autoFocus: false,
            width: '600px',
        };
        return this.matDialog.open(PrivacyPolicyModalComponent, defaultConfig);
    }
}
