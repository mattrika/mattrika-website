import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { HlmCardImports } from '@spartan-ng/helm/card'
import { HlmDialogService } from '@spartan-ng/helm/dialog'
import { ProjectDialogComponent } from './project-dialog/project-dialog.component'
import { projects } from './project.data'
import type { Project } from './project.model'

@Component({
    selector: 'app-portfolio-section',
    imports: [
        NgIcon,
        ...HlmBadgeImports,
        ...HlmButtonImports,
        ...HlmCardImports,
    ],
    templateUrl: './portfolio-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './portfolio-section.component.css',
})
export class PortfolioSectionComponent {
    private readonly _dialogService = inject(HlmDialogService)

    projects: Project[] = projects

    openProject(project: Project) {
        this._dialogService.open(ProjectDialogComponent, {
            contentClass: 'sm:max-w-4xl!',
            context: project,
        })
    }
}
