import { Component, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
    lucideArrowUpRight,
    lucideCalendar,
    lucideGlobe,
    lucideSparkles,
    lucideUser,
} from '@ng-icons/lucide'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { HlmDialogImports } from '@spartan-ng/helm/dialog'
import type { Project } from '../../project.model'

@Component({
    selector: 'app-project-dialog-details',
    imports: [
        NgIcon,
        ...HlmBadgeImports,
        ...HlmButtonImports,
        ...HlmDialogImports,
    ],
    providers: [
        provideIcons({
            lucideArrowUpRight,
            lucideCalendar,
            lucideGlobe,
            lucideSparkles,
            lucideUser,
        }),
    ],
    templateUrl: './project-dialog-details.component.html',
})
export class ProjectDialogDetailsComponent {
    project = input.required<Project>()
    closeDialog = output<void>()
}
