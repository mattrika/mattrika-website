export function toNonNegative(value: number): number {
    if (value === undefined || value === null || Number.isNaN(value)) {
        return 0
    }
    return Math.max(value, 0)
}
