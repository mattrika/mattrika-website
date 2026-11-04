import { Route } from '@angular/router'

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('./pages/landing/landing.component').then(
                (m) => m.LandingComponent,
            ),
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./pages/projects/projects.component').then(
                (m) => m.ProjectsComponent,
            ),
    },
    {
        path: 'sign',
        loadComponent: () =>
            import('./pages/sign/sign.component').then((m) => m.SignComponent),
    },
    {
        path: 'terms',
        loadComponent: () =>
            import('./pages/terms/terms.component').then(
                (m) => m.TermsComponent,
            ),
    },
    {
        path: 'terms-and-conditions',
        redirectTo: 'terms',
        pathMatch: 'full',
    },
    {
        path: 'privacy',
        loadComponent: () =>
            import('./pages/privacy/privacy.component').then(
                (m) => m.PrivacyComponent,
            ),
    },
    {
        path: 'privacy-policy',
        redirectTo: 'privacy',
        pathMatch: 'full',
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/landing/landing.component').then(
                (m) => m.LandingComponent,
            ),
    },
]
