import { isPlatformBrowser } from '@angular/common'
import { Injectable, inject, PLATFORM_ID } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class ScrollRevealService {
    private readonly platformId = inject(PLATFORM_ID)
    private observer: IntersectionObserver | null = null
    private scrollHandler: (() => void) | null = null
    private timeouts: any[] = []

    init(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return
        }

        // Respect reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document
                .querySelectorAll(
                    '.reveal-init, .reveal-card, .reveal-left, .reveal-right, [data-reveal]',
                )
                .forEach((el) => el.classList.add('is-revealed'))
            return
        }

        // Arm the CSS transitions
        document.documentElement.classList.add('reveal-ready')

        // 1. Immediately check and reveal visible elements (Hero section)
        requestAnimationFrame(() => {
            this.check()
        })

        // 2. High-performance scroll listener
        this.scrollHandler = () => {
            this.check()
        }
        window.addEventListener('scroll', this.scrollHandler, { passive: true })

        // 3. Native IntersectionObserver for immediate per-element detection
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-revealed')
                            this.observer?.unobserve(entry.target)
                        }
                    })
                },
                {
                    root: null,
                    rootMargin: '0px 0px -30px 0px',
                    threshold: 0.02,
                },
            )

            this.observeNewElements()
        }

        // 4. Safety sweeps to ensure nothing remains unrevealed if layout shifts
        this.timeouts.push(setTimeout(() => this.check(), 300))
        this.timeouts.push(setTimeout(() => this.check(), 800))
        this.timeouts.push(setTimeout(() => this.check(), 1600))
    }

    /**
     * Dynamically queries all unrevealed elements and reveals any that have entered view.
     * Can be invoked directly on every frame of the smooth scroll loop.
     */
    check(): void {
        if (!isPlatformBrowser(this.platformId)) return

        const triggerLine = window.innerHeight * 0.93
        const unrevealed = document.querySelectorAll(
            '.reveal-ready .reveal-init:not(.is-revealed), .reveal-ready .reveal-card:not(.is-revealed), .reveal-ready .reveal-left:not(.is-revealed), .reveal-ready .reveal-right:not(.is-revealed), .reveal-ready [data-reveal]:not(.is-revealed)',
        )

        unrevealed.forEach((el) => {
            const rect = el.getBoundingClientRect()
            if (rect.top <= triggerLine && rect.bottom >= -150) {
                el.classList.add('is-revealed')
                if (this.observer) {
                    this.observer.unobserve(el)
                }
            }
        })
    }

    private observeNewElements(): void {
        if (!this.observer) return
        const unrevealed = document.querySelectorAll(
            '.reveal-ready .reveal-init:not(.is-revealed), .reveal-ready .reveal-card:not(.is-revealed), .reveal-ready .reveal-left:not(.is-revealed), .reveal-ready .reveal-right:not(.is-revealed)',
        )
        unrevealed.forEach((el) => {
            this.observer?.observe(el)
        })
    }

    destroy(): void {
        if (this.observer) {
            this.observer.disconnect()
            this.observer = null
        }
        if (this.scrollHandler) {
            window.removeEventListener('scroll', this.scrollHandler)
            this.scrollHandler = null
        }
        this.timeouts.forEach((id) => clearTimeout(id))
        this.timeouts = []
        if (isPlatformBrowser(this.platformId)) {
            document.documentElement.classList.remove('reveal-ready')
        }
    }
}
