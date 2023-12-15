import { Route } from '@angular/router';
import { HomeComponent } from './page/temp-app/home/home.component';
import { WorkInProgressComponent } from './page/work-in-progress/work-in-progress.component';
import { TempAppComponent } from './page/temp-app/temp-app.component';

export const appRoutes: Route[] = [
    {
        path: 'beta-version',
        component: TempAppComponent,
        children: [
            {
                path: '',
                redirectTo: 'services',
                pathMatch: 'full',
            },
            {
                path: 'services',
                loadComponent: () =>
                    import('./page/temp-app/services/services.component').then(
                        (m) => m.ServicesComponent,
                    ),
            },
            {
                path: 'team',
                loadComponent: () =>
                    import('./page/temp-app/team/team.component').then(
                        (m) => m.TeamComponent,
                    ),
            },
            {
                path: 'contact',
                loadComponent: () =>
                    import('./page/temp-app/contact/contact.component').then(
                        (m) => m.ContactComponent,
                    ),
            },
        ],
    },
    {
        path: 'home',
        component: WorkInProgressComponent,
    },
    // TODO ne pas embarquer
    { path: '', redirectTo: '/beta-version', pathMatch: 'full' },
    { path: '**', redirectTo: '/beta-version' },
];
