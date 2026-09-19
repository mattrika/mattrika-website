/**
 * Masks a string by keeping a certain number of characters visible at the start and end.
 * @param input The string to mask.
 * @param visibleCharsHead The number of visible characters at the start.
 * @param visibleCharsTail The number of visible characters at the end.
 * @returns The masked string.
 */
export function maskString(
    input: string,
    visibleCharsHead: number,
    visibleCharsTail: number,
) {
    if (!input) return ''

    const visibleLength = visibleCharsHead + visibleCharsTail
    if (input.length < visibleLength) return '*'.repeat(input.length)

    const head = input.slice(0, visibleCharsHead)
    const tail = input.slice(-visibleCharsTail)
    const maskedMiddle = '*'.repeat(input.length - visibleLength)

    return `${head}${maskedMiddle}${tail}`
}
