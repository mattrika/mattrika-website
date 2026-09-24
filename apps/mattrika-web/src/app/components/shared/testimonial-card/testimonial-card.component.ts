import {
    ChangeDetectionStrategy,
    Component,
    input,
    inject,
} from '@angular/core'
import { NgIconComponent } from '@ng-icons/core'
import { HlmBadgeImports } from '@spartan-ng/helm/badge'
import { HlmDialogService } from '@spartan-ng/helm/dialog'
import { TestimonialDialogComponent } from '../testimonial-dialog/testimonial-dialog.component'

@Component({
    selector: 'app-testimonial-card',
    standalone: true,
    imports: [...HlmBadgeImports, NgIconComponent],
    templateUrl: './testimonial-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialCardComponent {
    shortText = input<string>('')
    fullText = input<string[]>([])
    authorName = input<string>('')
    authorTitle = input<string>('')
    avatarInitials = input<string>('')

    private readonly _dialogService = inject(HlmDialogService)

    openModal() {
        this._dialogService.open(TestimonialDialogComponent, {
            contentClass: 'sm:max-w-3xl!',
            context: {
                shortText: this.shortText(),
                fullText: this.fullText(),
                authorName: this.authorName(),
                authorTitle: this.authorTitle(),
                avatarInitials: this.avatarInitials(),
            },
        })
    }
}
