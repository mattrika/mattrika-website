import { Route } from '@angular/router'

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/landing/landing.component').then(
                (m) => m.LandingComponent,
            ),
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./pages/portfolio/portfolio.component').then(
                (m) => m.PortfolioComponent,
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
