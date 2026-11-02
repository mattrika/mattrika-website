import { isPlatformBrowser } from '@angular/common'
import {
    Component,
    inject,
    AfterViewInit,
    OnDestroy,
    PLATFORM_ID,
    ChangeDetectorRef,
    signal,
    WritableSignal,
} from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideArrowRight, lucideExternalLink } from '@ng-icons/lucide'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { GET_IN_TOUCH_TEXT } from '../../models/constants'
import { SmoothScrollService } from '../../services/smooth-scroll.service'

interface StatItem {
    target: number
    decimals: number
    suffix: string
    label: string
    displayValue: WritableSignal<string>
}

@Component({
    selector: 'app-hero-section',
    imports: [NgIcon, ...HlmButtonImports, ...HlmBadgeImports],
    providers: [provideIcons({ lucideArrowRight, lucideExternalLink })],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
    private readonly _platformId = inject(PLATFORM_ID)
    private readonly _smoothScroll = inject(SmoothScrollService)
    private readonly _cdr = inject(ChangeDetectorRef)

    stats: StatItem[] = [
        {
            target: 10,
            decimals: 0,
            suffix: '+',
            label: 'Products shipped',
            displayValue: signal('10+'),
        },
        {
            target: 12,
            decimals: 0,
            suffix: '+',
            label: 'Happy clients',
            displayValue: signal('12+'),
        },
        {
            target: 3,
            decimals: 0,
            suffix: '+',
            label: 'Years in the craft',
            displayValue: signal('3+'),
        },
        {
            target: 99.9,
            decimals: 1,
            suffix: '%',
            label: 'Uptime delivered',
            displayValue: signal('99.9%'),
        },
    ]

    techTags = [
        'Angular',
        'Node.js',
        'TypeScript',
        'React Native',
        'AWS',
        'PostgreSQL',
        'GraphQL',
        'CI/CD',
    ]

    clients = [
        'Lieblings',
        'Montuams',
        'Sheresta',
        'Quizzaro',
        'Pagung',
        'PdfAir',
    ]

    getInTouchText = GET_IN_TOUCH_TEXT

    private unbindScroll?: () => void
    private countAnimId: number | null = null

    scrollTo(event: Event, id: string): void {
        event.preventDefault()
        if (!isPlatformBrowser(this._platformId)) return
        const target = document.getElementById(id)
        if (target) {
            this._smoothScroll.scrollTo(target, 70)
        }
    }

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this._platformId)) return

        // Smooth parallax on scroll
        this.unbindScroll = this._smoothScroll.onScroll((scrollY) => {
            const heroHeight = window.innerHeight * 0.95
            if (scrollY <= heroHeight) {
                const offset = scrollY * 0.12
                document.documentElement.style.setProperty(
                    '--hero-parallax',
                    `${offset}px`,
                )
            }
        })

        // Animate counter statistics
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.startCountAnimation()
        }
    }

    private startCountAnimation(): void {
        const duration = 1200
        let startTimestamp: number | null = null

        // Initialize display to zero
        for (const stat of this.stats) {
            stat.displayValue.set((0).toFixed(stat.decimals) + stat.suffix)
        }
        this._cdr.detectChanges()

        const step = (timestamp: number) => {
            if (startTimestamp === null) {
                startTimestamp = timestamp
            }

            const elapsed = timestamp - startTimestamp
            const progress = Math.min(elapsed / duration, 1)
            // Cubic ease-out
            const easeOut = 1 - Math.pow(1 - progress, 3)

            for (const stat of this.stats) {
                const currentVal = stat.target * easeOut
                stat.displayValue.set(
                    currentVal.toFixed(stat.decimals) + stat.suffix,
                )
            }
            this._cdr.detectChanges()

            if (progress < 1) {
                this.countAnimId = requestAnimationFrame(step)
            } else {
                for (const stat of this.stats) {
                    stat.displayValue.set(
                        stat.target.toFixed(stat.decimals) + stat.suffix,
                    )
                }
                this._cdr.detectChanges()
                this.countAnimId = null
            }
        }

        this.countAnimId = requestAnimationFrame(step)
    }

    ngOnDestroy(): void {
        if (this.countAnimId !== null) {
            cancelAnimationFrame(this.countAnimId)
            this.countAnimId = null
        }
        if (this.unbindScroll) {
            this.unbindScroll()
        }
    }
}
