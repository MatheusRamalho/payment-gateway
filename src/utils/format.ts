export const cardFlagsTypes: { [key: string]: RegExp } = {
    mastercard: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
    visa: /^4/,
    elo: /^401178|^401179|^431274|^438935|^451416|^457393|^457631|^457632|^504175|^627780|^636297|^636369|^636368|^(506699|5067[0-6]\d|50677[0-8])|^(50900\d|5090[1-9]\d|509[1-9]\d{2})|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])|^(65092[1-9]|65097[0-8])/,
    amex: /^3[47]/,
}

export function getCardFlag(str: string) {
    if (!str) return ''
    const cardnumber = str.replace(/[^0-9]+/g, '')

    return (
        Object.keys(cardFlagsTypes).find((item) =>
            cardFlagsTypes[item].test(cardnumber),
        ) || ''
    )
}

export function dateFormat(date: string | Date) {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium',
    })

    const formatted = formatter.format(
        date instanceof Date ? date : new Date(date),
    )

    return formatted
}

export function priceFormat(value: number) {
    if (value === null || typeof value !== 'number') {
        return 'Valor inválido'
    }

    const formatted = (value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    })

    return formatted
}

export function fixZero(value: number) {
    const formatted = value < 10 ? `0${value}` : value

    return formatted
}

export function formatNumberCard(value: string): string {
    // Verifica se a string tem exatamente 16 caracteres
    if (value.length !== 16) {
        throw new Error('A string deve ter exatamente 16 caracteres.')
    }

    // Adiciona hífens a cada 4 caracteres
    const formatted = value.replace(/(.{4})(.{4})(.{4})(.{4})/, '$1-$2-$3-$4')

    return formatted
}

export function removeHyphens(value: string): string {
    const formatted = value.replace(/-/g, '')

    return formatted
}
