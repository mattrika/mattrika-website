import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmButtonImports } from '@spartan-ng/helm/button'

@Component({
    selector: 'app-cta-section',
    imports: [NgIcon, ...HlmButtonImports],
    templateUrl: './cta-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './cta-section.component.css',
})
export class CtaSectionComponent {}
