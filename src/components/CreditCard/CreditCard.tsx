import { getCardFlag } from '@/utils/card'

import { Icon } from '@/components/Icon'
import { LogoVisa } from '@/components/LogoVisa'
import { LogoElo } from '@/components/LogoElo'
import { LogoMasterCard } from '@/components/LogoMasterCard'
import { LogoAmex } from '@/components/LogoAmex'
import { ChipCard } from '@/components/ChipCard'

interface CreditCardProps {
    cardNumber: string
    cardholderName: string
    expirationMonth: string
    expirationYear: string
    securityCode?: string
}

export function CreditCard({
    cardNumber,
    cardholderName,
    expirationMonth,
    expirationYear,
}: CreditCardProps) {
    const flag = getCardFlag(cardNumber)

    return (
        <div className="z-20 relative w-60 h-80 px-8 py-10 rounded-2xl border border-gray-50 backdrop-blur-lg bg-white/30 flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <div className="w-10 h-12 rounded">
                    <ChipCard />
                </div>

                <Icon name="nfc" customClass="size-8 text-gray-300" />
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-regular text-xs text-gray-500 uppercase">
                    {cardholderName}
                </p>

                <p className="font-medium text-sm text-gray-500">
                    {cardNumber}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-500">
                    {expirationMonth}/{expirationYear}
                </p>

                {flag === 'mastercard' && <LogoMasterCard />}
                {flag === 'visa' && <LogoVisa />}
                {flag === 'elo' && <LogoElo />}
                {flag === 'amex' && <LogoAmex />}

                {flag !== 'mastercard' &&
                    flag !== 'visa' &&
                    flag !== 'elo' &&
                    flag !== 'amex' && (
                        <div className="w-12 h-8 rounded bg-gray-100" />
                    )}
            </div>
        </div>
    )
}
