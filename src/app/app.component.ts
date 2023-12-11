import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'g2sp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'g2sp';
}
