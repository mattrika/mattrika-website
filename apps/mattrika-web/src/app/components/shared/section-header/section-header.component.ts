import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'

@Component({
    selector: 'app-section-header',
    imports: [...HlmBadgeImports],
    templateUrl: './section-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
    badge = input.required<string>()
    title = input.required<string>()
    description = input.required<string>()
}
