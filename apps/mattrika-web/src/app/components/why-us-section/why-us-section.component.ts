import {
    Component,
    ChangeDetectionStrategy,
    signal,
    OnInit,
    OnDestroy,
} from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { TestimonialCardComponent } from '../shared/testimonial-card/testimonial-card.component'
import { TESTIMONIALS } from './testimonials.data'

interface Feature {
    icon: string
    title: string
    description: string
}

@Component({
    selector: 'app-why-us-section',
    imports: [NgIcon, ...HlmBadgeImports, TestimonialCardComponent],
    templateUrl: './why-us-section.component.html',
    styleUrl: './why-us-section.component.css',
})
export class WhyUsSectionComponent implements OnInit, OnDestroy {
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

    testimonials = TESTIMONIALS

    activeIndex = signal(0)
    private intervalId: any

    ngOnInit() {
        this.startInterval()
    }

    ngOnDestroy() {
        this.pause()
    }

    startInterval() {
        if (this.intervalId) return
        this.intervalId = setInterval(() => {
            this.activeIndex.update((i) => (i + 1) % this.testimonials.length)
        }, 5000)
    }

    pause() {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resume() {
        this.startInterval()
    }

    getCardStyle(index: number): string {
        const active = this.activeIndex()
        const length = this.testimonials.length
        const difference = (index - active + length) % length

        if (difference === 0) {
            return 'z-30 translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100 shadow-2xl'
        } else if (difference === 1) {
            return 'z-20 translate-x-6 translate-y-4 rotate-6 scale-[0.95] opacity-80 shadow-lg'
        } else {
            return 'z-10 translate-x-12 translate-y-8 rotate-12 scale-[0.90] opacity-40 shadow-md'
        }
    }
}
