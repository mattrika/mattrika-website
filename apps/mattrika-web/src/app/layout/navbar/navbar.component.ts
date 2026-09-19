import { Component, signal, ChangeDetectionStrategy } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmButtonImports } from '@spartan-ng/helm/button'

@Component({
    selector: 'app-navbar',
    imports: [NgIcon, ...HlmButtonImports],
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    mobileOpen = signal(false)

    navLinks = [
        { label: 'Services', id: 'services' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Work', id: 'work' },
        { label: 'Why Us', id: 'why-us' },
        { label: 'Contact', id: 'contact' },
    ]

    scrollTo(event: Event, id: string) {
        event.preventDefault()
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        this.mobileOpen.set(false)
    }
}
