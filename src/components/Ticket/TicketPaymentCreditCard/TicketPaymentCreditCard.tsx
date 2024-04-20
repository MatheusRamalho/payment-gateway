import { CreditCard } from '@/components/CreditCard'

interface TicketPaymentCreditCardProps {
    cardNumber: string
    cardholderName: string
    expirationMonth: string
    expirationYear: string
    securityCode?: string
}

export function TicketPaymentCreditCard({
    cardNumber,
    cardholderName,
    expirationMonth,
    expirationYear,
}: TicketPaymentCreditCardProps) {
    return (
        <div className="relative w-60 h-80 mx-auto -mt-20 rounded-2xl shadow-xl">
            <div className="z-10 absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-primary-300 rounded" />

            <CreditCard
                cardNumber={cardNumber}
                cardholderName={cardholderName}
                expirationMonth={expirationMonth}
                expirationYear={expirationYear}
            />
        </div>
    )
}
