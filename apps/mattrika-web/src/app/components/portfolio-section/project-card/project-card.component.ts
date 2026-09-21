import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmCardImports } from '@spartan-ng/helm/card'
import type { Project } from '../project.model'

@Component({
    selector: 'app-project-card',
    imports: [NgIcon, ...HlmBadgeImports, ...HlmCardImports],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
    project = input.required<Project>()
    projectClick = output<Project>()

    onClick() {
        this.projectClick.emit(this.project())
    }
}
