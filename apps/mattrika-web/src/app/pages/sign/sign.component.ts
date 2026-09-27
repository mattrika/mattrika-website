import { Component, inject, type OnInit } from '@angular/core'

@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html',
})
export class SignComponent implements OnInit {
    logoUrl = ''

    ngOnInit(): void {
        this.logoUrl =
            window.location.origin +
            // this._baseHref.replace(/\/$/, '') +
            '/Mattrika_logo.png'
    }
}
