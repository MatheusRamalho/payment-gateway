import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { CardPageLeft } from '@/components/CardPage/CardPageLeft'
import { CardPageRight } from '@/components/CardPage/CardPageRight'
import { CardPageRoot } from '@/components/CardPage/CardPageRoot'
import { TicketContent } from '@/components/Ticket/TicketContent'
import { TicketPaymentCreditCard } from '@/components/Ticket/TicketPaymentCreditCard'
import { TicketDivider } from '@/components/Ticket/TicketDivider'
import { TicketFooter } from '@/components/Ticket/TicketFooter'
import { TicketItem } from '@/components/Ticket/TicketItem'
import { TicketRoot } from '@/components/Ticket/TicketRoot'
import { InputContent } from '@/components/Input/InputContent'
import { InputField } from '@/components/Input/InputField'
import { InputLabel } from '@/components/Input/InputLabel'
import { InputRoot } from '@/components/Input/InputRoot'

export default function PaymentCreditCard() {
    return (
        <Section
            legend="Tela de pagamento de cartão de crédito"
            customClass="h-screen flex items-center justify-center flex-col"
        >
            <CardPageRoot
                icon="credit-card"
                title="Pagamento"
                subtitle="Cartão de cŕedito"
            >
                <CardPageLeft>
                    <form className="h-full">
                        <fieldset className="h-5/6 mb-4">
                            <InputRoot isCol>
                                <InputLabel
                                    id="card-number"
                                    name="Número do cartão"
                                    complement="Digite o número do cartão de 16 dígitos"
                                />

                                <InputContent>
                                    <InputField
                                        id="card-number"
                                        type="text"
                                        required
                                        placeholder="**** **** **** ****"
                                    />

                                    {/* <InputError message="Testando mensagem de erro" /> */}
                                </InputContent>
                            </InputRoot>

                            <InputRoot>
                                <InputLabel
                                    id="name"
                                    name="Nome do titular"
                                    complement="Informe o nome do titular descrito no cartão"
                                />

                                <InputContent>
                                    <InputField
                                        // IsError
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Nome..."
                                    />

                                    {/* <InputError message="Testando mensagem de erro" /> */}
                                </InputContent>
                            </InputRoot>

                            <InputRoot>
                                <InputLabel
                                    id="cvv-number"
                                    name="CVV"
                                    complement="Digite o código de 3 ou 4 dígitos do cartão"
                                />

                                <InputContent>
                                    <InputField
                                        id="cvv-number"
                                        type="text"
                                        required
                                        placeholder="****"
                                    />

                                    {/* <InputError message="Testando mensagem de erro" /> */}
                                </InputContent>
                            </InputRoot>

                            <InputRoot>
                                <InputLabel
                                    id="expiry-month"
                                    name="Data de validade"
                                    complement="Insira a data de validade do cartão"
                                />

                                <InputContent customClass="!flex-row">
                                    <InputContent customClass="!w-20 sm:!w-40">
                                        <InputField
                                            id="expiry-month"
                                            type="text"
                                            required
                                            placeholder="00"
                                        />

                                        {/* <InputError message="Testando mensagem de erro" /> */}
                                    </InputContent>

                                    <hr className="w-10 h-auto bg-gray-300 rotate-[110deg]" />

                                    <InputContent customClass="!w-20 sm:!w-40">
                                        <InputField
                                            id="expiry-year"
                                            type="text"
                                            required
                                            placeholder="00"
                                        />

                                        {/* <InputError message="Testando mensagem de erro" /> */}
                                    </InputContent>
                                </InputContent>
                            </InputRoot>
                        </fieldset>

                        <Button customClass="!w-full"> Pague agora </Button>
                    </form>
                </CardPageLeft>

                <CardPageRight>
                    <TicketRoot>
                        <TicketPaymentCreditCard
                            cardNumber="3511351135113511"
                            cardholderName="matheus r silva"
                            expirationMonth="09"
                            expirationYear="31"
                        />

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
