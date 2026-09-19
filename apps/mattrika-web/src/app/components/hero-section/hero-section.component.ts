import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmButtonImports } from '@spartan-ng/helm/button'

@Component({
    selector: 'app-hero-section',
    imports: [NgIcon, ...HlmButtonImports, ...HlmBadgeImports],
    templateUrl: './hero-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
    stats = [
        { value: '50+', label: 'Products shipped' },
        { value: '120+', label: 'Happy clients' },
        { value: '8+', label: 'Years in the craft' },
        { value: '99.9%', label: 'Uptime delivered' },
    ]
}
