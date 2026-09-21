import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    computed,
} from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { HlmCardImports } from '@spartan-ng/helm/card'
import { HlmDialogService } from '@spartan-ng/helm/dialog'
import { SectionHeaderComponent } from '../shared/section-header/section-header.component'
import { ProjectCardComponent } from './project-card/project-card.component'
import { ProjectDialogComponent } from './project-dialog/project-dialog.component'
import { projects } from './project.data'
import type { Project } from './project.model'

@Component({
    selector: 'app-portfolio-section',
    imports: [
        NgIcon,
        SectionHeaderComponent,
        ...HlmButtonImports,
        RouterLink,
        ProjectCardComponent,
    ],
    templateUrl: './portfolio-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './portfolio-section.component.css',
})
export class PortfolioSectionComponent {
    private readonly _dialogService = inject(HlmDialogService)

    maxProjects = input<number>()
    sectionTitle = input<string>('Portfolio')
    sectionHeading = input<string>("Selected work we're proud of")
    sectionDescription = input<string>(
        "A snapshot of products we've designed, built, and shipped — from SaaS platforms to mobile apps. Click any project to see the full story.",
    )

    displayedProjects = computed(() =>
        this.maxProjects() ? projects.slice(0, this.maxProjects()) : projects,
    )

    openProject(project: Project) {
        this._dialogService.open(ProjectDialogComponent, {
            contentClass: 'sm:max-w-4xl!',
            context: project,
        })
    }
}
