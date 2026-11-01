import { isPlatformBrowser } from '@angular/common'
import { Injectable, inject, PLATFORM_ID } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class SmoothScrollService {
    private readonly platformId = inject(PLATFORM_ID)

    private targetY = 0
    private currentY = 0
    private isRunning = false
    private rafId: number | null = null
    private readonly lerp = 0.088 // Signature liquid inertial damping
    private isInitialized = false

    private scrollCallbacks: Array<(scrollY: number) => void> = []

    private onWheelBound = this.onWheel.bind(this)
    private onSyncBound = this.onSync.bind(this)

    init(): void {
        if (!isPlatformBrowser(this.platformId) || this.isInitialized) {
            return
        }

        // Respect reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }

        // On mobile touch devices without a precision mouse/trackpad, let native touch scroll run
        const isTouchOnly =
            window.matchMedia('(pointer: coarse)').matches &&
            !window.matchMedia('(pointer: fine)').matches
        if (isTouchOnly) {
            return
        }

        this.currentY = window.scrollY
        this.targetY = window.scrollY
        this.isInitialized = true

        window.addEventListener('wheel', this.onWheelBound, { passive: false })
        window.addEventListener('scroll', this.onSyncBound, { passive: true })
    }

    onScroll(callback: (scrollY: number) => void): () => void {
        this.scrollCallbacks.push(callback)
        return () => {
            this.scrollCallbacks = this.scrollCallbacks.filter(
                (cb) => cb !== callback,
            )
        }
    }

    private onWheel(e: WheelEvent): void {
        // Yield to Spartan dialogs, modals, and overlays
        if (
            document.querySelector(
                '[role="dialog"], .cdk-overlay-pane, [data-spartan-dialog]',
            )
        ) {
            return
        }

        // Yield to elements with internal scroll (e.g., textarea, overflow scroll containers)
        let el = e.target as HTMLElement | null
        while (el && el !== document.body && el !== document.documentElement) {
            const overflowY = window.getComputedStyle(el).overflowY
            if (
                (overflowY === 'auto' || overflowY === 'scroll') &&
                el.scrollHeight > el.clientHeight
            ) {
                return
            }
            el = el.parentElement
        }

        e.preventDefault()

        let delta = e.deltaY
        if (e.deltaMode === 1) delta *= 36 // Firefox line mode
        if (e.deltaMode === 2) delta *= window.innerHeight // Page mode

        const maxScroll = Math.max(
            0,
            document.documentElement.scrollHeight - window.innerHeight,
        )

        this.targetY = Math.max(0, Math.min(maxScroll, this.targetY + delta))

        if (!this.isRunning) {
            this.isRunning = true
            this.currentY = window.scrollY
            this.rafId = requestAnimationFrame(this.tick)
        }
    }

    private onSync(): void {
        if (!this.isRunning) {
            this.currentY = window.scrollY
            this.targetY = window.scrollY
            this.notifyCallbacks(this.currentY)
        }
    }

    private tick = (): void => {
        const diff = this.targetY - this.currentY

        if (Math.abs(diff) < 0.5) {
            this.currentY = this.targetY
            window.scrollTo(0, Math.round(this.currentY))
            this.notifyCallbacks(this.currentY)
            this.isRunning = false
            this.rafId = null
            return
        }

        this.currentY += diff * this.lerp
        window.scrollTo(0, Math.round(this.currentY))
        this.notifyCallbacks(this.currentY)
        this.rafId = requestAnimationFrame(this.tick)
    }

    private notifyCallbacks(y: number): void {
        for (let i = 0; i < this.scrollCallbacks.length; i++) {
            this.scrollCallbacks[i](y)
        }
    }

    scrollTo(target: number | HTMLElement, offset = 80): void {
        if (!isPlatformBrowser(this.platformId)) return

        let destY = 0
        if (typeof target === 'number') {
            destY = target
        } else if (target) {
            const rect = target.getBoundingClientRect()
            destY = window.scrollY + rect.top - offset
        }

        const maxScroll = Math.max(
            0,
            document.documentElement.scrollHeight - window.innerHeight,
        )
        const finalDest = Math.max(0, Math.min(maxScroll, destY))

        if (!this.isInitialized) {
            window.scrollTo({ top: finalDest, behavior: 'smooth' })
            return
        }

        this.currentY = window.scrollY
        this.targetY = finalDest

        if (!this.isRunning) {
            this.isRunning = true
            this.rafId = requestAnimationFrame(this.tick)
        }
    }

    destroy(): void {
        if (!isPlatformBrowser(this.platformId) || !this.isInitialized) {
            return
        }

        window.removeEventListener('wheel', this.onWheelBound)
        window.removeEventListener('scroll', this.onSyncBound)
        if (this.rafId) {
            cancelAnimationFrame(this.rafId)
            this.rafId = null
        }
        this.scrollCallbacks = []
        this.isRunning = false
        this.isInitialized = false
    }
}
