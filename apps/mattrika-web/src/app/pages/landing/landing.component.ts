import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component'
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component'
import { PortfolioSectionComponent } from '../../components/portfolio-section/portfolio-section.component'
import { ProcessSectionComponent } from '../../components/process-section/process-section.component'
import { ServicesSectionComponent } from '../../components/services-section/services-section.component'
import { WhyUsSectionComponent } from '../../components/why-us-section/why-us-section.component'
import { FooterComponent } from '../../layout/footer/footer.component'
import { NavbarComponent } from '../../layout/navbar/navbar.component'

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
        CtaSectionComponent,
    ],
    templateUrl: './landing.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './landing.component.css',
})
export class LandingComponent {}
