import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { NgClass } from '@angular/common';
import { PAGE_REFERENTIAL, PageId } from '../header.model';

@Component({
    selector: 'g2sp-header-item',
    standalone: true,
    imports: [MatRippleModule, NgClass],
    templateUrl: './header-item.component.html',
})
export class HeaderItemComponent {
    @Output()
    categoryClicked = new EventEmitter<PageId>();

    @Input()
    categoryName!: string;
    @Input()
    isSelected!: boolean;

    handleClickCategory(categoryName: string) {
        const targetPage = PAGE_REFERENTIAL.filter(
            (page) => page.id === categoryName,
        )[0];
        this.categoryClicked.emit(targetPage.id);
    }
}
