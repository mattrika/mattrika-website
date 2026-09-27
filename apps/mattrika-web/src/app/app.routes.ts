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
        path: '**',
        loadComponent: () =>
            import('./pages/landing/landing.component').then(
                (m) => m.LandingComponent,
            ),
    },
]
