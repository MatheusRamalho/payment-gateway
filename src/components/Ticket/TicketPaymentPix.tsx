import { QRCode } from '@/components/QRCode'

export function TicketPaymentPix() {
    return (
        <div className="relative w-60 h-80 mx-auto -mt-20 border border-gray-50 rounded-2xl shadow-xl bg-white">
            <div className="z-10 absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-primary-300 rounded" />

            <QRCode />
        </div>
    )
}
