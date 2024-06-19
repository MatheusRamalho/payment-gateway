import { CardPageLeft } from '@/components/CardPage/CardPageLeft'
import { CardPageRight } from '@/components/CardPage/CardPageRight'
import { CardPageRoot } from '@/components/CardPage/CardPageRoot'
import { InputContent } from '@/components/Input/InputContent'
import { InputFieldRadio } from '@/components/Input/InputFieldRadio'
import { InputLabel } from '@/components/Input/InputLabel'
import { InputRoot } from '@/components/Input/InputRoot'
import { LinkButton } from '@/components/LinkButton'
import { Section } from '@/components/Section'
import { TicketContent } from '@/components/Ticket/TicketContent'
import { TicketDivider } from '@/components/Ticket/TicketDivider'
import { TicketFooter } from '@/components/Ticket/TicketFooter'
import { TicketItem } from '@/components/Ticket/TicketItem'
import { TicketPaymentEmpty } from '@/components/Ticket/TicketPaymentEmpty'
import { TicketRoot } from '@/components/Ticket/TicketRoot'
import { ReactNode } from 'react'

interface CheckoutLayoutProps {
    legend: string
    icon: string
    title: string
    subtitle: string
    children: ReactNode
    ticketItens: []
    price: number
}

export function CheckoutLayout({}: CheckoutLayoutProps) {
    return (
        <div className="">
            <Section
                legend={legend}
                customClass="h-screen flex items-center justify-center flex-col"
            >
                <CardPageRoot
                    icon="dollar-sign"
                    title="Pagamento"
                    subtitle="Método de pagamento"
                >
                    <CardPageLeft>{children}</CardPageLeft>

                    <CardPageRight>
                        <TicketRoot>
                            <TicketPaymentEmpty />

                            <TicketContent>
                                <TicketItem
                                    item="Empresa"
                                    value="Empresa tal"
                                />
                                <TicketItem
                                    item="Processo"
                                    value="Empresa tal"
                                />
                                <TicketItem
                                    item="Produto"
                                    value="Empresa tal"
                                />
                            </TicketContent>

                            <TicketDivider />

                            <TicketFooter price={46.69} />
                        </TicketRoot>
                    </CardPageRight>
                </CardPageRoot>
            </Section>
        </div>
    )
}
