import { Component, inject, afterNextRender, OnDestroy } from '@angular/core'
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component'
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component'
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component'
import { PortfolioSectionComponent } from '../../components/portfolio-section/portfolio-section.component'
import { ProcessSectionComponent } from '../../components/process-section/process-section.component'
import { ServicesSectionComponent } from '../../components/services-section/services-section.component'
import { WhyUsSectionComponent } from '../../components/why-us-section/why-us-section.component'
import { FooterComponent } from '../../layout/footer/footer.component'
import { NavbarComponent } from '../../layout/navbar/navbar.component'
import { ScrollRevealService } from '../../services/scroll-reveal.service'
import { SmoothScrollService } from '../../services/smooth-scroll.service'

@Component({
    selector: 'app-landing',
    imports: [
        NavbarComponent,
        FooterComponent,
        HeroSectionComponent,
        PortfolioSectionComponent,
        ServicesSectionComponent,
        ProcessSectionComponent,
        WhyUsSectionComponent,
        FaqSectionComponent,
        CtaSectionComponent,
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
})
export class LandingComponent implements OnDestroy {
    private readonly smoothScroll = inject(SmoothScrollService)
    private readonly scrollReveal = inject(ScrollRevealService)

    constructor() {
        afterNextRender(() => {
            this.smoothScroll.init()
            this.scrollReveal.init()
            this.smoothScroll.onScroll(() => {
                this.scrollReveal.check()
            })
        })
    }

    ngOnDestroy(): void {
        this.smoothScroll.destroy()
        this.scrollReveal.destroy()
    }
}
