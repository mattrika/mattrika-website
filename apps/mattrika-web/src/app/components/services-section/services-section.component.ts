import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmCardImports } from '@spartan-ng/helm/card'

interface Service {
    icon: string
    title: string
    description: string
}

@Component({
    selector: 'app-services-section',
    imports: [NgIcon, ...HlmBadgeImports, ...HlmCardImports],
    templateUrl: './services-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {
    services: Service[] = [
        {
            icon: 'lucideCode2',
            title: 'Web Development',
            description:
                'Blazing-fast, accessible web applications built with modern frameworks like Angular, React, and Next.js.',
        },
        {
            icon: 'lucidePalette',
            title: 'UI/UX Design',
            description:
                'Research-driven design that turns complex problems into clean, intuitive, and delightful interfaces.',
        },
        {
            icon: 'lucideSmartphone',
            title: 'Mobile Apps',
            description:
                'Native and cross-platform mobile experiences that feel right at home on every device.',
        },
        {
            icon: 'lucideShoppingCart',
            title: 'E-commerce Solutions',
            description:
                'Conversion-focused storefronts, checkout flows, and order systems engineered to scale with you.',
        },
        {
            icon: 'lucideCloud',
            title: 'Cloud & DevOps',
            description:
                'CI/CD pipelines, cloud infrastructure, and monitoring that keep your product fast and reliable.',
        },
        {
            icon: 'lucideDatabase',
            title: 'Data & Analytics',
            description:
                'Dashboards and data pipelines that surface the metrics that actually matter to your business.',
        },
    ]
}
