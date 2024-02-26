import { Button } from '@/components/Button'
import { CardPage } from '@/components/CardPage'
import { CreditCard } from '@/components/CreditCard'
import { Input } from '@/components/Input'
import { Section } from '@/components/Section'
import { Ticket } from '@/components/Ticket'

export default function Home() {
    return (
        <Section
            legend="Tela de pagamento de cartão de crédito"
            customClass="h-screen flex items-center justify-center flex-col"
        >
            <CardPage.Root
                icon="credit-card"
                title="Pagamento - Cartão de cŕedito"
            >
                <CardPage.Left>
                    <form className="">
                        <fieldset className="mb-4">
                            <Input.Root isCol>
                                <Input.Label
                                    id="card-number"
                                    name="Número do cartão"
                                    complement="Digite o número do cartão de 16 dígitos"
                                />

                                <Input.Content>
                                    <Input.Field
                                        id="card-number"
                                        type="text"
                                        required
                                        placeholder="**** **** **** ****"
                                    />

                                    {/* <Input.Error message="Testando mensagem de erro" /> */}
                                </Input.Content>
                            </Input.Root>

                            <Input.Root>
                                <Input.Label
                                    id="name"
                                    name="Nome do titular"
                                    complement="Informe o nome do titular descrito no cartão"
                                />

                                <Input.Content>
                                    <Input.Field
                                        // IsError
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Nome..."
                                    />

                                    {/* <Input.Error message="Testando mensagem de erro" /> */}
                                </Input.Content>
                            </Input.Root>

                            <Input.Root>
                                <Input.Label
                                    id="cvv-number"
                                    name="CVV"
                                    complement="Digite o código de 3 ou 4 dígitos do cartão"
                                />

                                <Input.Content>
                                    <Input.Field
                                        id="cvv-number"
                                        type="text"
                                        required
                                        placeholder="****"
                                    />

                                    {/* <Input.Error message="Testando mensagem de erro" /> */}
                                </Input.Content>
                            </Input.Root>

                            <Input.Root>
                                <Input.Label
                                    id="expiry-month"
                                    name="Data de validade"
                                    complement="Insira a data de validade do cartão"
                                />

                                <Input.Content customClass="!flex-row">
                                    <Input.Content customClass="!w-20 sm:!w-40">
                                        <Input.Field
                                            id="expiry-month"
                                            type="text"
                                            required
                                            placeholder="00"
                                        />

                                        {/* <Input.Error message="Testando mensagem de erro" /> */}
                                    </Input.Content>

                                    <hr className="w-10 h-auto bg-gray-300 rotate-[110deg]" />

                                    <Input.Content customClass="!w-20 sm:!w-40">
                                        <Input.Field
                                            id="expiry-year"
                                            type="text"
                                            required
                                            placeholder="00"
                                        />

                                        {/* <Input.Error message="Testando mensagem de erro" /> */}
                                    </Input.Content>
                                </Input.Content>
                            </Input.Root>
                        </fieldset>

                        <Button customClass="!w-full"> Pague agora </Button>
                    </form>
                </CardPage.Left>

                <CardPage.Right>
                    <CreditCard />

                    <Ticket.Root>
                        <Ticket.Info
                            flight="RS995"
                            flightDate="23/05/2023"
                            boardingCity="São Paulo, Brasil"
                            boardingAcronym="GRU"
                            boardingTime="17:00"
                            landingCity="São Francisco, EUA"
                            landingAcronym="SFO"
                            landingTime="04:48"
                        />

                        <Ticket.Divider />

                        <Ticket.PayInfo
                            boardingTime="16:15"
                            terminal={2}
                            gate={15}
                            boardingGroup={3}
                        />
                    </Ticket.Root>
                </CardPage.Right>
            </CardPage.Root>
        </Section>
    )
}
