import { Component } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmCardImports } from '@spartan-ng/helm/card'

interface Service {
    icon: string
    title: string
    description: string
    accent: {
        iconBg: string
        iconHover: string
        topBar: string
        gradient: string
        hoverBorder: string
    }
}

@Component({
    selector: 'app-services-section',
    imports: [NgIcon, ...HlmBadgeImports, ...HlmCardImports],
    templateUrl: './services-section.component.html',
    styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {
    services: Service[] = [
        {
            icon: 'lucideCode2',
            title: 'Web Development',
            description:
                'High-performance, accessible web platforms built with modern enterprise architectures for seamless scale.',
            accent: {
                iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
                iconHover:
                    'group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-emerald-500/25',
                topBar: 'bg-gradient-to-r from-emerald-500 to-teal-400',
                gradient: 'from-emerald-500/[0.05] via-transparent',
                hoverBorder:
                    'hover:border-emerald-500/35 hover:shadow-emerald-500/10',
            },
        },
        {
            icon: 'lucidePalette',
            title: 'UI/UX Design',
            description:
                'Research-driven digital product design that turns complex requirements into intuitive, delightful user flows.',
            accent: {
                iconBg: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
                iconHover:
                    'group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-violet-500/25',
                topBar: 'bg-gradient-to-r from-violet-500 to-purple-400',
                gradient: 'from-violet-500/[0.05] via-transparent',
                hoverBorder:
                    'hover:border-violet-500/35 hover:shadow-violet-500/10',
            },
        },
        {
            icon: 'lucideSmartphone',
            title: 'Mobile Applications',
            description:
                'Polished iOS and Android mobile experiences engineered for 60fps performance and native platform parity.',
            accent: {
                iconBg: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
                iconHover:
                    'group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-sky-500/25',
                topBar: 'bg-gradient-to-r from-sky-500 to-cyan-400',
                gradient: 'from-sky-500/[0.05] via-transparent',
                hoverBorder: 'hover:border-sky-500/35 hover:shadow-sky-500/10',
            },
        },
        {
            icon: 'lucideShoppingCart',
            title: 'E-commerce Platforms',
            description:
                'Conversion-optimized storefronts, custom checkout pipelines, and inventory workflows built for high volume.',
            accent: {
                iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
                iconHover:
                    'group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-amber-500/25',
                topBar: 'bg-gradient-to-r from-amber-500 to-orange-400',
                gradient: 'from-amber-500/[0.05] via-transparent',
                hoverBorder:
                    'hover:border-amber-500/35 hover:shadow-amber-500/10',
            },
        },
        {
            icon: 'lucideCloud',
            title: 'Cloud & DevOps',
            description:
                'Automated CI/CD pipelines, container orchestration, and zero-downtime infrastructure for global delivery.',
            accent: {
                iconBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
                iconHover:
                    'group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-indigo-500/25',
                topBar: 'bg-gradient-to-r from-indigo-500 to-blue-400',
                gradient: 'from-indigo-500/[0.05] via-transparent',
                hoverBorder:
                    'hover:border-indigo-500/35 hover:shadow-indigo-500/10',
            },
        },
        {
            icon: 'lucideDatabase',
            title: 'Data & Analytics',
            description:
                'Scalable data pipelines, real-time telemetry, and actionable executive dashboards that guide business decisions.',
            accent: {
                iconBg: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
                iconHover:
                    'group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-rose-500/25',
                topBar: 'bg-gradient-to-r from-rose-500 to-pink-400',
                gradient: 'from-rose-500/[0.05] via-transparent',
                hoverBorder:
                    'hover:border-rose-500/35 hover:shadow-rose-500/10',
            },
        },
    ]
}
