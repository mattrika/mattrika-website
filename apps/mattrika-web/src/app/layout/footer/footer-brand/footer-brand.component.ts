import { Component, inject } from '@angular/core'
import { SmoothScrollService } from '../../../services/smooth-scroll.service'

@Component({
    selector: 'app-footer-brand',
    templateUrl: './footer-brand.component.html',
})
export class FooterBrandComponent {
    private readonly _smoothScroll = inject(SmoothScrollService)

    socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/mattrikatech/',
            ariaLabel: 'Mattrika on LinkedIn',
            icon: 'linkedin',
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/MattrikaTech',
            ariaLabel: 'Mattrika on Facebook',
            icon: 'facebook',
        },
        {
            name: 'Behance',
            href: 'https://www.behance.net/mattrika',
            ariaLabel: 'Mattrika on Behance',
            icon: 'behance',
        },
    ]

    scrollTo(event: Event, href: string): void {
        event.preventDefault()
        this._smoothScroll.scrollTo(0)
    }
}
