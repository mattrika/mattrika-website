import { Component, inject } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { SmoothScrollService } from '../../services/smooth-scroll.service'

@Component({
    selector: 'app-footer',
    imports: [NgIcon],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {
    private readonly _smoothScroll = inject(SmoothScrollService)
    protected currentYear = new Date().getFullYear()

    companyLinks = [
        { label: 'Work', href: '#portfolio' },
        { label: 'Services', href: '#services' },
        { label: 'Process', href: '#process' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
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
