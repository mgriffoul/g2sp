import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/' },
];
