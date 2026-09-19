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
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Work', href: '#work' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Contact', href: '#contact' },
    ]
}
