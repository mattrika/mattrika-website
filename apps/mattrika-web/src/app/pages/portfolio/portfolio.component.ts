import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component'
import { PortfolioSectionComponent } from '../../components/portfolio-section/portfolio-section.component'
import { FooterComponent } from '../../layout/footer/footer.component'
import { NavbarComponent } from '../../layout/navbar/navbar.component'

@Component({
    selector: 'app-portfolio-page',
    imports: [
        NavbarComponent,
        FooterComponent,
        PortfolioSectionComponent,
        CtaSectionComponent,
    ],
    templateUrl: './portfolio.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class PortfolioComponent {}
