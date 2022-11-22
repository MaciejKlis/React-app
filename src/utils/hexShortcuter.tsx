export const hexShortcuter = (hex: string):string  => {
    return hex.slice(0, 6) + '...' + hex.substr(hex.length - 4)
}