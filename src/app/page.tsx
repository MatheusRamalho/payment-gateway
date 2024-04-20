'use client'

import { useState } from 'react'

import { Section } from '@/components/Section'
import { CardPageLeft } from '@/components/CardPage/CardPageLeft'
import { CardPageRight } from '@/components/CardPage/CardPageRight'
import { CardPageRoot } from '@/components/CardPage/CardPageRoot'
import { TicketContent } from '@/components/Ticket/TicketContent'
import { TicketDivider } from '@/components/Ticket/TicketDivider'
import { TicketFooter } from '@/components/Ticket/TicketFooter'
import { TicketItem } from '@/components/Ticket/TicketItem'
import { TicketRoot } from '@/components/Ticket/TicketRoot'
import { TicketPaymentEmpty } from '@/components/Ticket/TicketPaymentEmpty'
import { InputContent } from '@/components/Input/InputContent'
import { InputFieldRadio } from '@/components/Input/InputFieldRadio'
import { InputLabel } from '@/components/Input/InputLabel'
import { InputRoot } from '@/components/Input/InputRoot'
import { LinkButton } from '@/components/LinkButton'

export default function Home() {
    const [paymentType, setPaymentType] = useState('')

    function onOptionChange(event: any) {
        setPaymentType(event.target.value)
    }

    return (
        <Section
            legend="Tela de método de pagamento"
            customClass="h-screen flex items-center justify-center flex-col"
        >
            <CardPageRoot
                icon="dollar-sign"
                title="Pagamento"
                subtitle="Método de pagamento"
            >
                <CardPageLeft>
                    <form className="h-full">
                        <fieldset className="h-5/6 mb-4">
                            <InputRoot isCol>
                                <InputLabel
                                    id=""
                                    name="Escolha um método de pagamento"
                                    complement="Selecione um entre os três métodos disponíveis"
                                />

                                <InputContent>
                                    <InputFieldRadio
                                        type="radio"
                                        id="payment_type"
                                        name="payment-type"
                                        value="credit-card"
                                        label="Cartão de credito"
                                        required
                                        checked={paymentType === 'credit-card'}
                                        onChange={onOptionChange}
                                    />

                                    <InputFieldRadio
                                        type="radio"
                                        id="payment_type"
                                        name="payment-type"
                                        value="bank-slip"
                                        label="Boleto"
                                        required
                                        checked={paymentType === 'bank-slip'}
                                        onChange={onOptionChange}
                                    />

                                    <InputFieldRadio
                                        type="radio"
                                        id="payment_type"
                                        name="payment-type"
                                        value="pix"
                                        label="Pix"
                                        required
                                        checked={paymentType === 'pix'}
                                        onChange={onOptionChange}
                                    />

                                    {/* <InputError message="Testando mensagem de erro" /> */}
                                </InputContent>
                            </InputRoot>
                        </fieldset>

                        <LinkButton
                            customClass="!w-full"
                            link={`/checkout/payment/${paymentType}`}
                        >
                            Selecionar
                        </LinkButton>
                    </form>
                </CardPageLeft>

                <CardPageRight>
                    <TicketRoot>
                        <TicketPaymentEmpty />

                        <TicketContent>
                            <TicketItem item="Empresa" value="Empresa tal" />
                            <TicketItem item="Empresa" value="Empresa tal" />
                            <TicketItem item="Empresa" value="Empresa tal" />
                            <TicketItem item="Empresa" value="Empresa tal" />
                        </TicketContent>

                        <TicketDivider />

                        <TicketFooter price={46.69} />
                    </TicketRoot>
                </CardPageRight>
            </CardPageRoot>
        </Section>
    )
}
