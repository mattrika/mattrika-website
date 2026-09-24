import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { TestimonialCardComponent } from '../shared/testimonial-card/testimonial-card.component'

interface Feature {
    icon: string
    title: string
    description: string
}

@Component({
    selector: 'app-why-us-section',
    imports: [NgIcon, ...HlmBadgeImports, TestimonialCardComponent],
    templateUrl: './why-us-section.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    testimonial = {
        shortText:
            "Working with the Mattrika team was honestly a dream come true. I've worked with development teams and contractors for over 15 years, and this team really stands out. They're hardworking, dependable, and care about understanding what you're trying to build.",
        fullText: [
            "Working with the Mattrika team was honestly a dream come true. I've worked with development teams and contractors for over 15 years, and this team really stands out. They're hardworking, dependable, and care about understanding what you're trying to build.",
            'We talked almost daily while working on ContentERP, which made it easy to stay updated and keep everyone on the same page. They asked questions when something needed clarification and took the time to understand how the features should work, with security in mind throughout development.',
            "I also really appreciated their honesty. I'd sometimes dream up a feature and think it could be done that same day, and they were great at helping me understand what was involved and setting realistic expectations. They weren't afraid to push back when needed, and that was a good thing. Those conversations helped keep the project focused and moving forward.",
            'They also went beyond the development work itself. When we needed to move servers to reduce costs, they researched better options to help me save money. That kind of effort meant a lot to me.',
            "They stayed committed throughout the project, and when issues came up, they worked through them and got them fixed. I really appreciated having a team I could communicate openly with and trust to follow through. I'd happily work with Mattrika again and highly recommend them.",
        ],
        authorName: 'Shannon Kempenich',
        authorTitle: 'CEO, ContentERP',
        avatarInitials: 'SK',
    }
}
