import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatRippleModule} from "@angular/material/core";

@Component({
  selector: 'header-item',
  standalone: true,
  imports: [
    MatRippleModule
  ],
  templateUrl: './header-item.component.html'
})
export class HeaderItemComponent{
  @Output()
  categoryClicked = new EventEmitter<string>();

  @Input()
  categoryName!: string;

  onClickCategory(category: string) {
    this.categoryClicked.emit(category);
  }
}