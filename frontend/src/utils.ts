export const getCellLetterFromNumber = (n: number): string => {
    return String.fromCharCode(97 + n).toUpperCase()
}
