import { Icon } from '@/components/Icon'

interface TicketFooterProps {
    price: number
}

export function TicketFooter({ price }: TicketFooterProps) {
    return (
        <div className="h-28 flex items-center justify-between p-8">
            <div className="">
                <p className="text-light text-sm text-gray-400">
                    Você tem que pagar
                </p>

                <div className="mt-2">
                    <span className="text-2xl font-bold text-gray-800 rounded-lg">
                        {price}
                    </span>

                    <span className="ml-2 text-md text-gray-400 font-regular">
                        BRL
                    </span>
                </div>
            </div>

            <Icon name="badge-dollar-sign" customClass="text-gray-400 size-8" />
        </div>
    )
}
