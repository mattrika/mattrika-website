import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
} from '@angular/core'
import {
    provideClientHydration,
    withEventReplay,
} from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter, withInMemoryScrolling } from '@angular/router'
import { provideIcons } from '@ng-icons/core'
import {
    lucideArrowRight,
    lucideArrowUpRight,
    lucideCloud,
    lucideCode2,
    lucideDatabase,
    lucideMail,
    lucideMapPin,
    lucideMenu,
    lucidePalette,
    lucidePhone,
    lucideQuote,
    lucideShieldCheck,
    lucideShoppingCart,
    lucideSmartphone,
    lucideSparkles,
    lucideTrendingUp,
    lucideUsers,
    lucideX,
    lucideZap,
} from '@ng-icons/lucide'
import { provideSpartanHlm } from '@spartan-ng/helm/utils'
import { appRoutes } from './app.routes'

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(withEventReplay()),
        provideBrowserGlobalErrorListeners(),
        provideRouter(
            appRoutes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
            }),
        ),
        provideAnimations(),
        provideSpartanHlm(),
        provideIcons({
            lucideArrowRight,
            lucideArrowUpRight,
            lucideCloud,
            lucideCode2,
            lucideDatabase,
            lucideMail,
            lucideMapPin,
            lucideMenu,
            lucidePalette,
            lucidePhone,
            lucideQuote,
            lucideShieldCheck,
            lucideShoppingCart,
            lucideSmartphone,
            lucideSparkles,
            lucideTrendingUp,
            lucideUsers,
            lucideX,
            lucideZap,
        }),
    ],
}
