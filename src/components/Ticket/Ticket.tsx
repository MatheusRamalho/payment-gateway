import { Icon } from '@/components/Icon'
import { Card } from '@/components/Card'
import { priceFormat } from '@/utils/format'

interface TicketProps {
    company: string
    order: string
    product: string
    discount: number
    price: number
    cardNumber: string
    cardholderName: string
    expirationMonth: string
    expirationYear: string
    securityCode?: string
}

export function Ticket({
    company,
    order,
    product,
    discount,
    price,
    cardNumber,
    cardholderName,
    expirationMonth,
    expirationYear,
    securityCode,
}: TicketProps) {
    return (
        <div className="relative bg-secondary-200/50 dark:bg-secondary-800 rounded-xl w-full lg:w-80 mt-32 lg:mt-0">
            <div className="relative w-11/12 max-w-96 lg:w-60 h-60 lg:h-80 -mt-20 rounded-2xl shadow-xl mx-auto">
                <div className="z-10 absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-primary-300 rounded" />

                <Card
                    cardNumber={cardNumber}
                    cardholderName={cardholderName}
                    expirationMonth={expirationMonth}
                    expirationYear={expirationYear}
                    securityCode={securityCode || ''}
                />
            </div>

            <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="flex-1 font-regular text-secondary-500 text-left text-sm">
                        Empresa
                    </p>

                    <p className="flex-1 font-bold text-secondary-800 dark:text-secondary-200 text-right text-sm">
                        {company}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="flex-1 font-regular text-secondary-500 text-left text-sm">
                        Processo
                    </p>

                    <p className="flex-1 font-bold text-secondary-800 dark:text-secondary-200 text-right text-sm">
                        {order}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="flex-1 font-regular text-secondary-500 text-left text-sm">
                        Produto
                    </p>

                    <p className="flex-1 font-bold text-secondary-800 dark:text-secondary-200 text-right text-sm">
                        {product}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="flex-1 font-regular text-secondary-500 text-left text-sm">
                        Desconto
                    </p>

                    <p className="flex-1 font-bold text-secondary-800 dark:text-secondary-200 text-right text-sm">
                        {priceFormat(discount)}
                    </p>
                </div>
            </div>

            <div className="relative border-2 border-dashed border-secondary-200 dark:border-secondary-600 border-spacing-[0.938rem_0.625rem] before:content-[''] before:absolute before:-translate-x-2/4 before:-translate-y-2/4 before:size-10 before:bg-white before:dark:bg-secondary-900 before:rounded-full before:left-0 before:top-0 after:content-[''] after:absolute after:translate-x-2/4 after:-translate-y-2/4 after:size-10 after:bg-white after:dark:bg-secondary-900 after:rounded-full after:left-auto after:top-0 after:right-0" />

            <div className="h-28 flex items-center justify-between p-8">
                <div className="">
                    <p className="text-light text-sm text-secondary-500">
                        Você tem que pagar
                    </p>

                    <div className="mt-2">
                        <span className="text-2xl font-bold text-secondary-800 dark:text-secondary-200 rounded-lg">
                            {priceFormat(price)}
                        </span>

                        <span className="ml-2 text-md text-secondary-500 font-regular">
                            BRL
                        </span>
                    </div>
                </div>

                <Icon
                    name="badge-dollar-sign"
                    customClass="text-secondary-500 size-8"
                />
            </div>
        </div>
    )
}
