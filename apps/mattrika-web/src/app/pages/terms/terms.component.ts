import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { FooterComponent } from '../../layout/footer/footer.component'
import { NavbarComponent } from '../../layout/navbar/navbar.component'

@Component({
    selector: 'app-terms',
    imports: [NavbarComponent, FooterComponent, RouterLink, NgIcon],
    templateUrl: './terms.component.html',
})
export class TermsComponent {
    protected readonly lastUpdated = 'November 2, 2026'
}
