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
