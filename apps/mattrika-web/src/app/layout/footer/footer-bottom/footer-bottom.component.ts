import { Component, inject } from '@angular/core'
import { SmoothScrollService } from '../../../services/smooth-scroll.service'

@Component({
    selector: 'app-footer-bottom',
    templateUrl: './footer-bottom.component.html',
    host: {
        class: 'flex flex-col items-center justify-between gap-4 text-xs font-tight text-ink/65 sm:flex-row',
    },
})
export class FooterBottomComponent {
    private readonly _smoothScroll = inject(SmoothScrollService)
    protected currentYear = new Date().getFullYear()

    scrollToTop(event: Event): void {
        event.preventDefault()
        this._smoothScroll.scrollTo(0)
    }
}
