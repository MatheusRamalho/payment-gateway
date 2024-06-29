'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { CardPageLeft } from '@/components/CardPage/CardPageLeft'
import { CardPageRight } from '@/components/CardPage/CardPageRight'
import { CardPageRoot } from '@/components/CardPage/CardPageRoot'
import { FormFieldContent } from '@/components/FormField/FormFieldContent'
import { FormFieldError } from '@/components/FormField/FormFieldError'
import { FormFieldLabel } from '@/components/FormField/FormFieldLabel'
import { FormFieldRoot } from '@/components/FormField/FormFieldRoot'
import { Button } from '@/components/Button'
import { Ticket } from '@/components/Ticket'
import { CardFlagAmex } from '@/components/CardFlag/CardFlagAmex'
import { CardFlagElo } from '@/components/CardFlag/CardFlagElo'
import { CardFlagMasterCard } from '@/components/CardFlag/CardFlagMasterCard'
import { CardFlagVisa } from '@/components/CardFlag/CardFlagVisa'
import { formatNumberCard, getCardFlag } from '@/utils/format'

const paymentSchema = zod.object({
    card_number: zod
        .string()
        .length(16, 'O campo deve ter exatamente 16 caracteres')
        .regex(/^\d+$/, 'O campo deve conter apenas caracteres numéricos')
        .nonempty('O numero do cartão é obrigatório'),
    cardholder_name: zod
        .string()
        .nonempty('O nome do titular do cartão é obrigatório'),
    expiration_month: zod
        .number()
        .int()
        .min(1, 'O mês deve ser no mínimo 1')
        .max(12, 'O mês deve ser no máximo 12')
        .transform((val) => (val < 10 ? `0${val}` : `${val}`)),
    expiration_year: zod
        .number()
        .int()
        .min(2, 'O ano não pode ter menos de 2 dígitos.')
        .max(2, 'O ano não pode ter mais de 2 dígitos.')
        .transform((val) => (val < 10 ? `0${val}` : `${val}`)),
    security_code: zod
        .string()
        .min(3, 'O código de seguirança (CVV) não pode ter menos de 3 dígitos.')
        .max(4, 'O código de seguirança (CVV) não pode ter mais de 4 dígitos.')
        .nonempty('O cvv é obrigatório'),
})

type PaymentSchemaData = zod.infer<typeof paymentSchema>

export default function Home() {
    const currentYear = Number(new Date().getFullYear().toString().slice(-2))

    const {
        control,
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<PaymentSchemaData>({
        resolver: zodResolver(paymentSchema),
        defaultValues: {
            cardholder_name: '',
            card_number: '',
            expiration_month: '',
            expiration_year: '',
            security_code: '',
        },
    })

    const cardNumberWatch = watch('card_number')
    const cardholderNameWatch = watch('cardholder_name')
    const expirationMonthWatch = watch('expiration_month')
    const expirationYearWatch = watch('expiration_year')
    const securityCodeWatch = watch('security_code')
    const flag = getCardFlag(cardNumberWatch)

    console.log(cardNumberWatch)

    function onSubmit(data: PaymentSchemaData) {
        console.log(data)
    }

    return (
        <CardPageRoot legend="Checkout">
            <CardPageLeft
                icon="credit-card"
                title="Pagamento"
                subtitle="Cartão de crédito/débito"
            >
                <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="flex flex-col gap-4 md:gap-10">
                        <FormFieldRoot isCol>
                            <FormFieldLabel
                                id="card-number"
                                name="Número do cartão"
                                complement="Digite o número do cartão de 16 dígitos"
                            />

                            <FormFieldContent>
                                <div className="relative w-full">
                                    <Controller
                                        name="card_number"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                id="card_number"
                                                type="text"
                                                minLength={16}
                                                maxLength={16}
                                                required
                                                placeholder="**** **** **** ****"
                                                className="pl-4"
                                                {...register('card_number')}
                                                onInput={(e) => {
                                                    // Remove caracteres não numéricos em tempo real
                                                    const target =
                                                        e.target as HTMLInputElement
                                                    target.value =
                                                        target.value.replace(
                                                            /[^0-9]/g,
                                                            '',
                                                        )
                                                    target.value =
                                                        formatNumberCard(
                                                            target.value,
                                                        )
                                                }}
                                            />
                                        )}
                                    />

                                    <div className="absolute top-1/2 left-3 -translate-y-1/2">
                                        {flag === 'mastercard' && (
                                            <CardFlagMasterCard />
                                        )}
                                        {flag === 'visa' && <CardFlagVisa />}
                                        {flag === 'elo' && <CardFlagElo />}
                                        {flag === 'amex' && <CardFlagAmex />}
                                    </div>
                                </div>

                                {errors.card_number &&
                                    errors.card_number.message && (
                                        <FormFieldError
                                            message={errors.card_number.message}
                                        />
                                    )}
                            </FormFieldContent>
                        </FormFieldRoot>

                        <FormFieldRoot>
                            <FormFieldLabel
                                id="name"
                                name="Nome do titular"
                                complement="Informe o nome do titular descrito no cartão"
                            />

                            <FormFieldContent>
                                <Controller
                                    name="cardholder_name"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="cardholder_name"
                                            type="text"
                                            required
                                            placeholder="Nome..."
                                            {...register('cardholder_name')}
                                        />
                                    )}
                                />

                                {errors.cardholder_name &&
                                    errors.cardholder_name.message && (
                                        <FormFieldError
                                            message={
                                                errors.cardholder_name.message
                                            }
                                        />
                                    )}
                            </FormFieldContent>
                        </FormFieldRoot>

                        <FormFieldRoot>
                            <FormFieldLabel
                                id="cvv-number"
                                name="CVV"
                                complement="Digite o código de 3 ou 4 dígitos do cartão"
                            />

                            <FormFieldContent>
                                <Controller
                                    name="security_code"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="security_code"
                                            type="password"
                                            required
                                            placeholder="****"
                                            minLength={3}
                                            maxLength={4}
                                            {...register('security_code')}
                                        />
                                    )}
                                />

                                {errors.security_code &&
                                    errors.security_code.message && (
                                        <FormFieldError
                                            message={
                                                errors.security_code.message
                                            }
                                        />
                                    )}
                            </FormFieldContent>
                        </FormFieldRoot>

                        <FormFieldRoot>
                            <FormFieldLabel
                                id="expiry-month"
                                name="Data de validade"
                                complement="Insira a data de validade do cartão"
                            />

                            <FormFieldContent customClass="!flex-row">
                                <FormFieldContent customClass="!w-1/2">
                                    <Controller
                                        name="expiration_month"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                id="expiration_month"
                                                type="number"
                                                placeholder="MM"
                                                min={1}
                                                max={12}
                                                minLength={2}
                                                maxLength={2}
                                                {...register(
                                                    'expiration_month',
                                                    {
                                                        valueAsNumber: true,
                                                    },
                                                )}
                                                onBlur={(e) => {
                                                    const value = parseInt(
                                                        e.target.value,
                                                        10,
                                                    )

                                                    if (
                                                        value >= 1 &&
                                                        value <= 12
                                                    ) {
                                                        setValue(
                                                            'expiration_month',
                                                            value < 10
                                                                ? `0${value}`
                                                                : `${value}`,
                                                        )
                                                    }
                                                }}
                                            />
                                        )}
                                    />

                                    {errors.expiration_month &&
                                        errors.expiration_month.message && (
                                            <FormFieldError
                                                message={
                                                    errors.expiration_month
                                                        .message
                                                }
                                            />
                                        )}
                                </FormFieldContent>

                                <hr className="w-10 h-auto bg-secondary-200 rotate-[110deg]" />

                                <FormFieldContent customClass="!w-1/2">
                                    <Controller
                                        name="expiration_year"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                id="expiration_year"
                                                type="number"
                                                required
                                                placeholder="YY"
                                                min={currentYear}
                                                minLength={2}
                                                maxLength={2}
                                                {...register(
                                                    'expiration_year',
                                                    {
                                                        valueAsNumber: true,
                                                    },
                                                )}
                                                onBlur={(e) => {
                                                    const value = parseInt(
                                                        e.target.value,
                                                        10,
                                                    )

                                                    if (value >= currentYear) {
                                                        setValue(
                                                            'expiration_year',
                                                            value < 10
                                                                ? `0${value}`
                                                                : `${value}`,
                                                        )
                                                    }
                                                }}
                                            />
                                        )}
                                    />

                                    {errors.expiration_year &&
                                        errors.expiration_year.message && (
                                            <FormFieldError
                                                message={
                                                    errors.expiration_year
                                                        .message
                                                }
                                            />
                                        )}
                                </FormFieldContent>
                            </FormFieldContent>
                        </FormFieldRoot>
                    </fieldset>

                    <div className="flex flex-col gap-4 mt-8">
                        <Button> Pague agora </Button>
                    </div>
                </form>
            </CardPageLeft>

            <CardPageRight>
                <Ticket
                    company="Company software"
                    order="156987"
                    product="Mackbook Air"
                    discount={10000}
                    price={466900}
                    cardNumber={cardNumberWatch}
                    cardholderName={cardholderNameWatch}
                    expirationMonth={expirationMonthWatch}
                    expirationYear={expirationYearWatch}
                    securityCode={securityCodeWatch}
                />
            </CardPageRight>
        </CardPageRoot>
    )
}
