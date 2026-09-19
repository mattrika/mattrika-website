export function transformCsvStringToArray(text: string | string[]): string[] {
    if (Array.isArray(text)) {
        return text.filter((el) => el.trim() !== '')
    }
    return text
        .split(',')
        .map((el) => el.trim())
        .filter((el) => el !== '')
}

export function trimLowercase(str?: string): string {
    return (str ?? '').trim().toLowerCase()
}
