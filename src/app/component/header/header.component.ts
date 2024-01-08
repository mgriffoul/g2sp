import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { HeaderItemComponent } from './header-item/header-item.component';
import { PAGE_REFERENTIAL, PageId } from './header.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'g2sp-header',
    standalone: true,
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatRippleModule,
        HeaderItemComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    currentPage!: PageId;
    PageId = PageId;

    constructor(private router: Router) {}

    ngOnInit() {
        this.initCurrentSelectedPage();
        this.listenPageChanges();
    }

    private listenPageChanges() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPage = PAGE_REFERENTIAL.filter(
                    (page) => page.url === event.url,
                )[0].id;
            }
        });
    }

    private initCurrentSelectedPage() {
        const url = this.router.url;
        const currentPage = PAGE_REFERENTIAL.filter(
            (page) => page.url === url,
        )[0]?.id;
        this.currentPage = currentPage ?? PageId.SERVICES;
    }

    async onClickCategory(pageId: PageId) {
        const targetPage = PAGE_REFERENTIAL.filter(
            (page) => page.id === pageId,
        )[0];
        await this.routeTo(targetPage?.url);
    }

    isSelected(categoryName: string) {
        return this.currentPage === categoryName;
    }

    private async routeTo(url: string) {
        await this.router.navigateByUrl(url);
    }

    handleClickLogo() {
        this.router.navigateByUrl('/services');
    }
}
