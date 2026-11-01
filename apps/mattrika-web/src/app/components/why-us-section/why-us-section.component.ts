import { Component, ChangeDetectionStrategy, inject } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmDialogService } from '@spartan-ng/helm/dialog'
import { TestimonialDialogComponent } from '../shared/testimonial-dialog/testimonial-dialog.component'
import { TESTIMONIALS, ClientTestimonial } from './testimonials.data'

interface Feature {
    icon: string
    title: string
    description: string
}

@Component({
    selector: 'app-why-us-section',
    imports: [NgIcon],
    templateUrl: './why-us-section.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './why-us-section.component.css',
})
export class WhyUsSectionComponent {
    private readonly _dialogService = inject(HlmDialogService)

    features: Feature[] = [
        {
            icon: 'lucideUsers',
            title: 'Senior-only teams',
            description:
                'No hand-offs to juniors. You work directly with the senior engineers architecting your product.',
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
                'We measure our success by your growth—conversion, user retention, and production stability.',
        },
    ]

    readonly testimonials: ClientTestimonial[] = TESTIMONIALS

    // Duplicated list to create infinite seamless marquee loop (repeats 3 default items)
    get duplicatedTestimonials(): ClientTestimonial[] {
        return [
            ...this.testimonials,
            ...this.testimonials,
            ...this.testimonials,
            ...this.testimonials,
        ]
    }

    openTestimonialModal(testimonial: ClientTestimonial): void {
        this._dialogService.open(TestimonialDialogComponent, {
            contentClass: 'sm:max-w-3xl!',
            context: {
                shortText: testimonial.shortText,
                fullText: testimonial.fullText,
                authorName: testimonial.authorName,
                authorTitle: testimonial.authorTitle,
                avatarInitials: testimonial.avatarInitials,
            },
        })
    }
}
