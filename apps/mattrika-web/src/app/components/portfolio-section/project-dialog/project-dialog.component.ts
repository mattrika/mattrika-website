import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmButtonImports } from '@spartan-ng/helm/button'
import { HlmDialogImports } from '@spartan-ng/helm/dialog'
import type { Project } from '../project.model'

@Component({
    selector: 'app-project-dialog',
    imports: [
        NgIcon,
        ...HlmBadgeImports,
        ...HlmButtonImports,
        ...HlmDialogImports,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './project-dialog.component.html',
})
export class ProjectDialogComponent {
    private readonly _dialogRef = inject(BrnDialogRef)
    protected readonly project = injectBrnDialogContext<Project>()
    protected readonly activeImage = signal(0)

    close() {
        this._dialogRef.close()
    }

    selectImage(index: number) {
        this.activeImage.set(index)
    }

    get displayUrl(): string | null {
        const link = this.project.link
        if (!link || link === '#') return null
        return link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
    }
}
