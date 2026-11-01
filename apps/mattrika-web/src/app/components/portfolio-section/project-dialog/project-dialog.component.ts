import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    signal,
} from '@angular/core'
import { BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog'
import type { Project } from '../project.model'
import { ProjectDialogBrowserComponent } from './project-dialog-browser/project-dialog-browser.component'
import { ProjectDialogDetailsComponent } from './project-dialog-details/project-dialog-details.component'

@Component({
    selector: 'app-project-dialog',
    imports: [ProjectDialogBrowserComponent, ProjectDialogDetailsComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './project-dialog.component.html',
})
export class ProjectDialogComponent {
    private readonly _dialogRef = inject(BrnDialogRef)
    protected readonly project = injectBrnDialogContext<Project>()
    protected readonly activeImage = signal(0)
    protected readonly isReloading = signal(false)

    @HostListener('window:keydown', ['$event'])
    handleKeydown(event: KeyboardEvent) {
        if (event.key === 'ArrowLeft') {
            this.prevImage()
        } else if (event.key === 'ArrowRight') {
            this.nextImage()
        }
    }

    close() {
        this._dialogRef.close()
    }

    selectImage(index: number) {
        this.activeImage.set(index)
    }

    prevImage() {
        if (this.activeImage() > 0) {
            this.activeImage.update((i) => i - 1)
        }
    }

    nextImage() {
        if (this.activeImage() < this.project.images.length - 1) {
            this.activeImage.update((i) => i + 1)
        }
    }

    reloadPreview() {
        this.isReloading.set(true)
        setTimeout(() => {
            this.isReloading.set(false)
        }, 500)
    }
}
