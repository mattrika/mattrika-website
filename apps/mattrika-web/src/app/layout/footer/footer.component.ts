import { Component } from '@angular/core'
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component'
import { FooterBrandComponent } from './footer-brand/footer-brand.component'
import { FooterContactComponent } from './footer-contact/footer-contact.component'
import { FooterLinksComponent } from './footer-links/footer-links.component'

@Component({
    selector: 'app-footer',
    imports: [
        FooterBrandComponent,
        FooterLinksComponent,
        FooterContactComponent,
        FooterBottomComponent,
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {}
