export function hasImageExtension(url: string): boolean {
    return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url)
}

export function hasVideoExtension(url: string): boolean {
    return /\.(mp4|avi|mov|wmv|flv|mkv|webm)$/i.test(url)
}

export function hasDocumentExtension(url: string): boolean {
    return /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|txt)$/i.test(url)
}

// Email regex to match a valid email address
export const EmailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
