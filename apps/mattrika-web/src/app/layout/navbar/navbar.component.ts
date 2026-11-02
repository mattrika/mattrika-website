import { isPlatformBrowser } from '@angular/common'
import { Component, signal, inject, PLATFORM_ID } from '@angular/core'
import { Router } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { GET_IN_TOUCH_TEXT } from '../../models/constants'
import { SmoothScrollService } from '../../services/smooth-scroll.service'

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
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    private readonly _router = inject(Router)
    private readonly _platformId = inject(PLATFORM_ID)
    private readonly _smoothScroll = inject(SmoothScrollService)
    mobileOpen = signal(false)
    isScrolled = signal(false)

    constructor() {
        if (isPlatformBrowser(this._platformId)) {
            this.isScrolled.set(window.scrollY > 30)
            window.addEventListener(
                'scroll',
                () => {
                    this.isScrolled.set(window.scrollY > 30)
                },
                { passive: true },
            )
        }
    }

    get isHomeRoute(): boolean {
        return (
            this._router.url === '/' ||
            this._router.url === '' ||
            this._router.url.startsWith('/#')
        )
    }

    get isProjectsRoute(): boolean {
        return this._router.url.includes('/projects')
    }

    get navLinks(): NavLink[] {
        if (this.isProjectsRoute) {
            return [
                { label: 'Home', id: 'home', isRoute: true, path: '/' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Contact', id: 'contact' },
            ]
        }
        if (!this.isHomeRoute) {
            return [
                { label: 'Home', id: 'home', isRoute: true, path: '/' },
                { label: 'Work', id: 'portfolio' },
                { label: 'Services', id: 'services' },
                { label: 'Process', id: 'process' },
                { label: 'Why Us', id: 'why-us' },
                { label: 'FAQ', id: 'faq' },
            ]
        }
        return [
            { label: 'Work', id: 'portfolio' },
            { label: 'Services', id: 'services' },
            { label: 'Process', id: 'process' },
            { label: 'Why Us', id: 'why-us' },
            { label: 'FAQ', id: 'faq' },
        ]
    }

    getInTouchText = GET_IN_TOUCH_TEXT

    handleLogoClick(event: Event) {
        if (!this.isHomeRoute) {
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
        } else if (!this.isHomeRoute) {
            event.preventDefault()
            this.mobileOpen.set(false)
            this._router.navigate(['/'], { fragment: link.id })
        } else {
            this.scrollTo(event, link.id)
        }
    }

    scrollTo(event: Event, id: string) {
        event.preventDefault()
        this.mobileOpen.set(false)
        if (!this.isHomeRoute) {
            this._router.navigate(['/'], {
                fragment: id === 'top' || id === 'home' ? undefined : id,
            })
            return
        }
        if (id === 'top' || id === 'home') {
            this._smoothScroll.scrollTo(0)
            return
        }
        const target = document.getElementById(id)
        if (target) {
            this._smoothScroll.scrollTo(target, 70)
        }
    }
}
