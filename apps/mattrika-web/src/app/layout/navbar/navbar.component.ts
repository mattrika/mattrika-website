import {
    Component,
    signal,
    ChangeDetectionStrategy,
    inject,
} from '@angular/core'
import { Router } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { GET_IN_TOUCH_TEXT } from '../../models/constants'

interface NavLink {
    label: string
    id: string
    isRoute?: boolean
    path?: string
}

@Component({
    selector: 'app-navbar',
    imports: [NgIcon, ...HlmButtonImports],
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    private readonly _router = inject(Router)
    mobileOpen = signal(false)

    get isPortfolioRoute(): boolean {
        return this._router.url.includes('/portfolio')
    }

    get navLinks(): NavLink[] {
        if (this.isPortfolioRoute) {
            return [
                { label: 'Home', id: 'home', isRoute: true, path: '/' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Contact', id: 'contact' },
            ]
        }
        return [
            { label: 'Services', id: 'services' },
            { label: 'Portfolio', id: 'portfolio' },
            { label: 'Work', id: 'work' },
            { label: 'Why Us', id: 'why-us' },
            { label: 'Contact', id: 'contact' },
        ]
    }

    getInTouchText = GET_IN_TOUCH_TEXT

    handleLogoClick(event: Event) {
        if (this.isPortfolioRoute) {
            event.preventDefault()
            this._router.navigate(['/'])
        } else {
            this.scrollTo(event, 'top')
        }
    }

    handleLinkClick(event: Event, link: NavLink) {
        if (link.isRoute && link.path) {
            event.preventDefault()
            this._router.navigate([link.path])
            this.mobileOpen.set(false)
        } else {
            this.scrollTo(event, link.id)
        }
    }

    scrollTo(event: Event, id: string) {
        event.preventDefault()
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        this.mobileOpen.set(false)
    }
}
