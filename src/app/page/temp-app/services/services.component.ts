import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface Sections {
    iconName: string;
    description: string;
}

@Component({
    selector: 'g2sp-services',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
    sections: Sections[] = [];

    ngOnInit() {
        this.initWhySections();
    }

    private initWhySections() {
        this.sections = [
            {
                iconName: 'language',
                description:
                    'Des collaborateurs de plus en plus nombreux à utiliser massivement des outils informatiques',
            },
            {
                iconName: 'psychology',
                description:
                    'Une culture souvent fragile de la sécurité informatique de nombreux collaborateurs',
            },
            {
                iconName: 'bug_report',
                description:
                    'Des menaces cyber multiformes et croissantes, qui ciblent données, opérations et réputation',
            },
            {
                iconName: 'lock_open',
                description:
                    'Un niveau de préparation incertain et hétérogène aux défaillances de vos systèmes critiques',
            },
        ];
    }
}
