import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component'
import { PortfolioSectionComponent } from '../../components/portfolio-section/portfolio-section.component'
import { FooterComponent } from '../../layout/footer/footer.component'
import { NavbarComponent } from '../../layout/navbar/navbar.component'

@Component({
    selector: 'app-projects-page',
    imports: [
        NavbarComponent,
        FooterComponent,
        PortfolioSectionComponent,
        CtaSectionComponent,
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class ProjectsComponent {}
