export function parseBool(
    value: boolean | string | null | undefined | 1 | 0,
): boolean {
    if (value === undefined) return false
    if (value === null) return false
    if (typeof value === 'boolean') return value
    if (value === 1) return true
    if (value === 0) return false
    const valueStr = value.toString().trim().toLowerCase()
    if (['true', 't', 'yes', 'y', '1'].includes(valueStr)) return true
    if (['false', 'f', 'no', 'n', '0'].includes(valueStr)) return false
    return false
}
