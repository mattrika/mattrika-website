import { Component, ChangeDetectionStrategy } from '@angular/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmCardImports } from '@spartan-ng/helm/card'

interface ProcessStep {
    step: string
    title: string
    description: string
}

@Component({
    selector: 'app-process-section',
    imports: [...HlmBadgeImports, ...HlmCardImports],
    templateUrl: './process-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './process-section.component.css',
})
export class ProcessSectionComponent {
    process: ProcessStep[] = [
        {
            step: '01',
            title: 'Discover',
            description:
                'We dig into your goals, users, and constraints to define the right scope and success metrics.',
        },
        {
            step: '02',
            title: 'Design',
            description:
                'Wireframes become polished prototypes that get validated with real users before code is written.',
        },
        {
            step: '03',
            title: 'Build',
            description:
                'Sprint by sprint, we ship production-grade features with automated tests and daily feedback.',
        },
        {
            step: '04',
            title: 'Scale',
            description:
                'We stay on after launch—monitoring, iterating, and scaling your product as it grows.',
        },
    ]
}
