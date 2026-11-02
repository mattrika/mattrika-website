import { Component, computed, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
    lucideArrowUpRight,
    lucideChevronLeft,
    lucideChevronRight,
    lucideLock,
    lucideRotateCw,
    lucideX,
} from '@ng-icons/lucide'
import type { Project } from '../../project.model'

@Component({
    selector: 'app-project-dialog-browser',
    imports: [NgIcon],
    providers: [
        provideIcons({
            lucideX,
            lucideChevronLeft,
            lucideChevronRight,
            lucideRotateCw,
            lucideLock,
            lucideArrowUpRight,
        }),
    ],
    templateUrl: './project-dialog-browser.component.html',
})
export class ProjectDialogBrowserComponent {
    project = input.required<Project>()
    activeImage = input.required<number>()
    isReloading = input<boolean>(false)

    imageChange = output<number>()
    prev = output<void>()
    next = output<void>()
    reload = output<void>()
    closeDialog = output<void>()

    protected readonly displayUrl = computed(() => {
        const link = this.project().link
        if (!link || link === '#') return null
        return link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
    })

    protected readonly projectSlug = computed(() =>
        this.project()
            .title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-'),
    )
}
