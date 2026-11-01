import { Component, ChangeDetectionStrategy, inject } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { GET_IN_TOUCH_TEXT } from '../../models/constants'
import { SmoothScrollService } from '../../services/smooth-scroll.service'

@Component({
    selector: 'app-hero-section',
    imports: [NgIcon, ...HlmButtonImports, ...HlmBadgeImports],
    templateUrl: './hero-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
    private readonly _smoothScroll = inject(SmoothScrollService)

    stats = [
        { value: '10+', label: 'Products shipped' },
        { value: '12+', label: 'Happy clients' },
        { value: '3+', label: 'Years in the craft' },
        { value: '99.9%', label: 'Uptime delivered' },
    ]

    getInTouchText = GET_IN_TOUCH_TEXT

    scrollTo(event: Event, id: string) {
        event.preventDefault()
        const target = document.getElementById(id)
        if (target) {
            this._smoothScroll.scrollTo(target, 70)
        }
    }
}
