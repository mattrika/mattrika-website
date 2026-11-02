import { Component } from '@angular/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmCardImports } from '@spartan-ng/helm/card'

interface ProcessStep {
    step: string
    tag: string
    title: string
    description: string
    gradient: string
}

@Component({
    selector: 'app-process-section',
    imports: [...HlmBadgeImports, ...HlmCardImports],
    templateUrl: './process-section.component.html',
    styleUrl: './process-section.component.css',
})
export class ProcessSectionComponent {
    process: ProcessStep[] = [
        {
            step: '01',
            tag: 'STEP 1',
            title: 'Discover & Understand',
            description:
                'We analyze your product vision, target market, and technical constraints to establish a precise engineering roadmap.',
            gradient:
                'linear-gradient(180deg, #F6FBFF 0%, #E9F5FF 50%, #DDF0FF 100%)',
        },
        {
            step: '02',
            tag: 'STEP 2',
            title: 'Architecture & Strategy',
            description:
                'We design the technical architecture, data models, and UI design system so development moves fast without rework.',
            gradient:
                'linear-gradient(180deg, #FFF6F0 0%, #FFEFE6 50%, #FFE5D6 100%)',
        },
        {
            step: '03',
            tag: 'STEP 3',
            title: 'Build & Iterate',
            description:
                'High-velocity development cycles with test-driven quality, CI/CD deployment, and weekly review demos.',
            gradient:
                'linear-gradient(180deg, #F5FAFF 0%, #E8F4FE 50%, #DBEEFD 100%)',
        },
        {
            step: '04',
            tag: 'STEP 4',
            title: 'Launch & Scale',
            description:
                'Production release with observability, real-time error tracking, and ongoing infrastructure optimization.',
            gradient:
                'linear-gradient(180deg, #F4FFF8 0%, #E6FFF0 50%, #D6FFE4 100%)',
        },
    ]
}
