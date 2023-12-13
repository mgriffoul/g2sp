import { Route } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WorkInProgressComponent} from "./work-in-progress/work-in-progress.component";

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: WorkInProgressComponent
  },
  {
    path: 'beta-version',
    component: HomeComponent
  },
  {path: '**', redirectTo: '/home'}
];
