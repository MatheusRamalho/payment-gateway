import { getCardFlag } from '@/utils/format'

import { Icon } from '@/components/Icon'
import { CardFlagAmex } from '@/components/CardFlag/CardFlagAmex'
import { CardFlagElo } from '@/components/CardFlag/CardFlagElo'
import { CardFlagMasterCard } from '@/components/CardFlag/CardFlagMasterCard'
import { CardFlagVisa } from '@/components/CardFlag/CardFlagVisa'
import { CardChip } from '@/components/CardChip'
import { Skeleton } from '@/components/Skeleton'

interface CardProps {
    cardNumber: string
    cardholderName: string
    expirationMonth: string
    expirationYear: string
    securityCode?: string
}

export function Card({
    cardNumber,
    cardholderName,
    expirationMonth,
    expirationYear,
}: CardProps) {
    const flag = getCardFlag(cardNumber)

    return (
        <div className="z-20 relative w-full max-w-96 lg:w-60 h-60 lg:h-80 px-8 py-10 rounded-2xl border border-secondary-100 backdrop-blur-lg bg-white/30 flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <div className="w-10 h-12 rounded rotate-90 lg:rotate-0">
                    <CardChip />
                </div>

                <Icon name="nfc" customClass="size-8 text-secondary-500" />
            </div>

            <div className="flex flex-col gap-2">
                {cardholderName !== '' ? (
                    <p className="font-regular text-xs text-secondary-600 dark:text-secondary-800 uppercase">
                        {cardholderName}
                    </p>
                ) : (
                    <Skeleton customClass="w-20 h-2 bg-secondary-200" />
                )}

                {cardNumber !== '' ? (
                    <p className="font-medium text-sm text-secondary-800">
                        {cardNumber}
                    </p>
                ) : (
                    <Skeleton customClass="w-20 h-2 bg-secondary-200" />
                )}
            </div>

            <div className="flex items-center justify-between">
                {expirationMonth !== '' && expirationYear !== '' ? (
                    <p className="text-sm font-bold text-secondary-600 dark:text-secondary-800">
                        {expirationMonth}/{expirationYear}
                    </p>
                ) : (
                    <Skeleton customClass="w-10 h-3 bg-secondary-200" />
                )}

                {flag === 'mastercard' && <CardFlagMasterCard />}
                {flag === 'visa' && <CardFlagVisa />}
                {flag === 'elo' && <CardFlagElo />}
                {flag === 'amex' && <CardFlagAmex />}
                {flag !== 'mastercard' &&
                    flag !== 'visa' &&
                    flag !== 'elo' &&
                    flag !== 'amex' && (
                        <Skeleton customClass="w-12 h-8 bg-secondary-200" />
                    )}
            </div>
        </div>
    )
}
