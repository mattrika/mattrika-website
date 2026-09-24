import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { NgIconComponent } from '@ng-icons/core'
import { BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog'
import { HlmDialogImports } from '@spartan-ng/helm/dialog'

export interface TestimonialContext {
    shortText: string
    fullText: string[]
    authorName: string
    authorTitle: string
    avatarInitials: string
}

@Component({
    selector: 'app-testimonial-dialog',
    standalone: true,
    imports: [...HlmDialogImports, NgIconComponent],
    templateUrl: './testimonial-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialDialogComponent {
    private readonly _dialogRef = inject(BrnDialogRef)
    protected readonly testimonial =
        injectBrnDialogContext<TestimonialContext>()

    close() {
        this._dialogRef.close()
    }
}
