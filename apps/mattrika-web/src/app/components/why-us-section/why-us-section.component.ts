import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'

interface Feature {
    icon: string
    title: string
    description: string
}

@Component({
    selector: 'app-why-us-section',
    imports: [NgIcon, ...HlmBadgeImports],
    templateUrl: './why-us-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './why-us-section.component.css',
})
export class WhyUsSectionComponent {
    features: Feature[] = [
        {
            icon: 'lucideUsers',
            title: 'Senior-only teams',
            description:
                'No hand-offs to juniors. You work directly with the people architecting your product.',
        },
        {
            icon: 'lucideZap',
            title: 'Fast, iterative delivery',
            description:
                'Weekly demos and continuous deployments keep momentum high and surprises low.',
        },
        {
            icon: 'lucideShieldCheck',
            title: 'Secure by default',
            description:
                'Security, performance, and accessibility are baked in from day one—not bolted on later.',
        },
        {
            icon: 'lucideTrendingUp',
            title: 'Outcome-driven',
            description:
                'We measure our success by your growth—traffic, revenue, retention, and beyond.',
        },
    ]
}
