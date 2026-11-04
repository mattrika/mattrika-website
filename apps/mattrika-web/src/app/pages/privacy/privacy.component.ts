import { Component } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { FooterComponent } from '../../layout/footer/footer.component'
import { NavbarComponent } from '../../layout/navbar/navbar.component'

@Component({
    selector: 'app-privacy',
    imports: [NavbarComponent, FooterComponent, NgIcon],
    templateUrl: './privacy.component.html',
})
export class PrivacyComponent {
    protected readonly lastUpdated = 'November 2, 2026'
}
