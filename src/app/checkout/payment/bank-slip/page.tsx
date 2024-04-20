import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { CardPageLeft } from '@/components/CardPage/CardPageLeft'
import { CardPageRight } from '@/components/CardPage/CardPageRight'
import { CardPageRoot } from '@/components/CardPage/CardPageRoot'
import { TicketContent } from '@/components/Ticket/TicketContent'
import { TicketDivider } from '@/components/Ticket/TicketDivider'
import { TicketFooter } from '@/components/Ticket/TicketFooter'
import { TicketItem } from '@/components/Ticket/TicketItem'
import { TicketRoot } from '@/components/Ticket/TicketRoot'
import { TicketPaymentBankSlip } from '@/components/Ticket/TicketPaymentBankSlip'

export default function PaymentBankSlip() {
    return (
        <Section
            legend="Tela de pagamento por boleto"
            customClass="h-screen flex items-center justify-center flex-col"
        >
            <CardPageRoot icon="barcode" title="Pagamento" subtitle="Boleto">
                <CardPageLeft>
                    <form className="h-full">
                        <fieldset className="h-5/6 mb-4"></fieldset>
                        <Button customClass="!w-full"> Pague agora </Button>
                    </form>
                </CardPageLeft>

                <CardPageRight>
                    <TicketRoot>
                        <TicketPaymentBankSlip />

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
