export function join(input: string[], separator = ' '): string {
    return input.filter((x) => x).join(separator)
}

/**
 * I have an array const first = ['a', 'b', 'c', 'd', 'e']. I would like to check
 * whether a second array which is a subset of firstArray has occurrence in the first array in order.
 * Example: const secondArray = ['c', 'd'] should return true. But const thirdArray = ['d', 'c'] should return false.
 * @param firstArray
 * @param secondArray
 * @returns
 */
export function isSubsequence(
    firstArray: string[],
    secondArray: string[],
): boolean {
    let index = 0

    for (const element of firstArray) {
        if (element === secondArray[index]) {
            index++
        }
        if (index === secondArray.length) {
            return true
        }
    }

    return false
}
