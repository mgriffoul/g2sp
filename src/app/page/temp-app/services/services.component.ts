import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ServicesSectionComponent } from '../../../component/services-section/services-section.component';
import { MatListModule } from '@angular/material/list';
import { PageHeaderComponent } from '../../../component/page-header/page-header.component';

export interface Section {
    iconName?: string;
    description: string;
}

@Component({
    selector: 'g2sp-services',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        ServicesSectionComponent,
        MatListModule,
        PageHeaderComponent,
    ],
    templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {
    whySections: Section[] = [];
    simpleSections: Section[] = [];

    ngOnInit() {
        this.initWhySections();
        this.initSimpleSections();
    }

    private initSimpleSections() {
        this.simpleSections = [
            {
                description:
                    'Un état des lieux précis des forces et faiblesses de votre résilience cyber : un rapport opérationnel détaillé, une synthèse pour la Direction',
            },
            {
                description:
                    'Des recommandations ciblées, réalistes, échelonnées, adaptées au niveau de digitalisation de vos processus',
            },
            {
                description:
                    'Un accompagnement au juste nécessaire cohérent avec le dimensionnement de vos ressources et les caractéristiques de vos activités',
            },
        ];
    }

    private initWhySections() {
        this.whySections = [
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
