import { BankSlip } from '@/components/BankSlip'

export function TicketPaymentBankSlip() {
    return (
        <div className="relative w-60 h-80 mx-auto -mt-20 rounded-2xl shadow-xl">
            <div className="z-10 absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-primary-300 rounded" />

            <BankSlip />
        </div>
    )
}
