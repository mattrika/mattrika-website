import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronDown, lucidePlus, lucideMinus } from '@ng-icons/lucide'

interface FaqItem {
    question: string
    answer: string
}

@Component({
    selector: 'app-faq-section',
    imports: [NgIcon],
    providers: [
        provideIcons({
            lucideChevronDown,
            lucidePlus,
            lucideMinus,
        }),
    ],
    templateUrl: './faq-section.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent {
    openIndex = signal<number | null>(0)

    faqs: FaqItem[] = [
        {
            question: 'How does engagement and pricing work?',
            answer: 'We work on both fixed-scope milestone projects and flexible dedicated sprint retainers. Every project starts with a transparent architectural blueprint, clear scope definition, and predictable weekly delivery milestones.',
        },
        {
            question: 'What technologies and frameworks do you build with?',
            answer: 'We specialize in modern, high-velocity stacks: Angular, React, Next.js, Node.js/TypeScript, Hono, NestJS, PostgreSQL, Prisma/Drizzle, Tailwind CSS, and cloud platforms like AWS, GCP, and Cloudflare.',
        },
        {
            question: 'How fast can we kick off a new project?',
            answer: 'Typically within 5 to 7 business days following our initial alignment session and discovery blueprint. We keep onboarding fast and friction-free.',
        },
        {
            question: 'Do you work with existing teams or build from scratch?',
            answer: 'Both! We can act as an autonomous, full-cycle product team taking a vision from 0 to 1, or embed directly alongside your internal engineers to accelerate critical feature pipelines.',
        },
        {
            question: 'What happens after the product launches?',
            answer: 'We don’t just hand over code and disappear. We offer post-launch scaling retainers, infrastructure observability, continuous performance monitoring, and iterative feature development.',
        },
    ]

    toggle(index: number) {
        this.openIndex.update((current) => (current === index ? null : index))
    }
}
