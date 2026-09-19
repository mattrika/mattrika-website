import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgIcon } from '@ng-icons/core'

@Component({
    selector: 'app-footer',
    imports: [NgIcon],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './footer.component.css',
})
export class FooterComponent {
    protected currentYear = new Date().getFullYear()

    companyLinks = [
        { label: 'Services', href: '#services' },
        { label: 'Our Work', href: '#work' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Contact', href: '#contact' },
    ]
}
