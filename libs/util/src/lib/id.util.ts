import { customAlphabet } from 'nanoid'

const nanoid10chars = customAlphabet('1234567890abcdef', 10)

export const generateId = () => nanoid10chars()
export const prefixedId = (prefix: string, separator = '_') =>
    `${prefix}${separator}${nanoid10chars()}`
