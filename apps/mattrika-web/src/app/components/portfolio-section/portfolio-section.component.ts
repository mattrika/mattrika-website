import { Component, inject, input, computed } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon } from '@ng-icons/core'
import { HlmButtonImports } from '@spartan-ng/helm/button'
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
    styleUrl: './portfolio-section.component.css',
})
export class PortfolioSectionComponent {
    private readonly _dialogService = inject(HlmDialogService)

    maxProjects = input<number>()
    sectionTitle = input<string>('Selected Work')
    sectionHeading = input<string>('Real projects. Real impact.')
    sectionDescription = input<string>(
        "A selection of digital products, scalable web platforms, and mobile applications we've architected and built.",
    )

    displayedProjects = computed(() =>
        this.maxProjects() ? projects.slice(0, this.maxProjects()) : projects,
    )

    openProject(project: Project) {
        this._dialogService.open(ProjectDialogComponent, {
            contentClass:
                'max-w-[calc(100%-1.5rem)] sm:max-w-3xl lg:max-w-4xl p-0! gap-0! overflow-hidden rounded-2xl border border-border/70 shadow-2xl bg-card max-h-[92vh] sm:mx-auto!',
            backdropClass: 'bg-black/60! backdrop-blur-xs!',
            showCloseButton: false,
            context: project,
        })
    }
}
