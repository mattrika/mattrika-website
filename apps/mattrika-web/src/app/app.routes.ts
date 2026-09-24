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
        path: '**',
        loadComponent: () =>
            import('./pages/landing/landing.component').then(
                (m) => m.LandingComponent,
            ),
    },
]
