import { Component, inject } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { SmoothScrollService } from '../../../services/smooth-scroll.service'

@Component({
    selector: 'app-footer-links',
    imports: [NgIcon],
    templateUrl: './footer-links.component.html',
    host: {
        class: 'grid grid-cols-2 gap-8',
    },
})
export class FooterLinksComponent {
    private readonly _smoothScroll = inject(SmoothScrollService)

    companyLinks = [
        { label: 'Work', href: '#portfolio' },
        { label: 'Services', href: '#services' },
        { label: 'Process', href: '#process' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ]

    serviceLinks = [
        { label: 'Web Applications', href: '#services' },
        { label: 'UI/UX Product Design', href: '#services' },
        { label: 'Mobile Engineering', href: '#services' },
        { label: 'Cloud & Infrastructure', href: '#services' },
        { label: 'Custom Software', href: '#services' },
    ]

    scrollTo(event: Event, href: string): void {
        event.preventDefault()
        const id = href.replace('#', '')
        if (id === 'top' || id === '') {
            this._smoothScroll.scrollTo(0)
            return
        }
        const target = document.getElementById(id)
        if (target) {
            this._smoothScroll.scrollTo(target, 70)
        }
    }
}
