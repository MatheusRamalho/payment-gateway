'use client'

import { useState } from 'react'

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
import { InputLabel } from '@/components/Input/InputLabel'
import { InputRoot } from '@/components/Input/InputRoot'
import { InputField } from '@/components/Input/InputField'
import { InputFieldRadio } from '@/components/Input/InputFieldRadio'
import { InputError } from '@/components/Input/InputError'
import { Button } from '@/components/Button'
import { LinkButton } from '@/components/LinkButton'
import { TicketPaymentCreditCard } from '@/components/Ticket/TicketPaymentCreditCard'

export default function Home() {
    const [paymentType, setPaymentType] = useState('')

    function onOptionChange(event: any) {
        setPaymentType(event.target.value)
    }

    return (
        <CardPageRoot legend="Checkout">
            <CardPageLeft
                icon="dollar-sign"
                title="Pagamento"
                subtitle="Método de pagamento"
            >
                <form className="h-full">
                    <fieldset className="">
                        <h6 className="font-bold text-gray-500 text-xl pb-5 my-5 border-b border-b-gray-100">
                            Dados de usuário
                        </h6>

                        <div className="w-full flex gap-2">
                            <InputRoot isCol>
                                <InputLabel
                                    id="name"
                                    name="Nome"
                                    complement="Informe o seu nome"
                                />

                                <InputContent>
                                    <InputField
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Nome"
                                    />

                                    <InputError message="Testando mensagem de erro" />
                                </InputContent>
                            </InputRoot>

                            <InputRoot isCol>
                                <InputLabel
                                    id="surname"
                                    name="Sobrenome"
                                    complement="Informe seu sobrenome"
                                />

                                <InputContent>
                                    <InputField
                                        id="surname"
                                        type="text"
                                        required
                                        placeholder="Sobrenome"
                                    />

                                    <InputError message="Testando mensagem de erro" />
                                </InputContent>
                            </InputRoot>
                        </div>

                        <InputRoot isCol>
                            <InputLabel
                                id="document_number"
                                name="CPF"
                                complement="Informe o número do documento cpf"
                            />

                            <InputContent>
                                <InputField
                                    id="document_number"
                                    type="text"
                                    required
                                    placeholder="CPF"
                                />

                                <InputError message="Testando mensagem de erro" />
                            </InputContent>
                        </InputRoot>

                        <InputRoot isCol>
                            <InputLabel
                                id="email"
                                name="E-mail"
                                complement="Informe seu e-mail"
                            />

                            <InputContent>
                                <InputField
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="E-mail"
                                />

                                <InputError message="Testando mensagem de erro" />
                            </InputContent>
                        </InputRoot>

                        <InputRoot isCol>
                            <InputLabel
                                id="phone"
                                name="Telefone"
                                complement="Informe seu número"
                            />

                            <InputContent>
                                <InputField
                                    id="phone"
                                    type="tel"
                                    required
                                    placeholder="Telefone"
                                />

                                <InputError message="Testando mensagem de erro" />
                            </InputContent>
                        </InputRoot>
                    </fieldset>

                    <fieldset className="">
                        <h6 className="font-bold text-gray-500 text-xl pb-5 my-5 border-b border-b-gray-100">
                            Dados de endereço
                        </h6>

                        <div className="w-full flex gap-2">
                            <InputRoot isCol>
                                <InputLabel
                                    id="postalCode"
                                    name="CEP"
                                    complement="Informe o cep com 8 dígitos sem caracteres especiais"
                                />

                                <InputContent>
                                    <InputField
                                        id="postalCode"
                                        type="number"
                                        required
                                        placeholder="CEP"
                                    />

                                    <InputError message="Testando mensagem de erro" />
                                </InputContent>
                            </InputRoot>

                            <InputRoot isCol>
                                <InputLabel
                                    id="state"
                                    name="Estado (UF)"
                                    complement="Informe a sigla do estado"
                                />

                                <InputContent>
                                    <InputField
                                        id="state"
                                        type="text"
                                        required
                                        placeholder="UF"
                                    />

                                    <InputError message="Testando mensagem de erro" />
                                </InputContent>
                            </InputRoot>
                        </div>

                        <InputRoot isCol>
                            <InputLabel
                                id="street"
                                name="Rua"
                                complement="Informe o nome da rua"
                            />

                            <InputContent>
                                <InputField
                                    id="street"
                                    type="text"
                                    required
                                    placeholder="Rua"
                                />

                                <InputError message="Testando mensagem de erro" />
                            </InputContent>
                        </InputRoot>

                        <InputRoot isCol>
                            <InputLabel
                                id="district"
                                name="Bairro"
                                complement="Informe seu bairro"
                            />

                            <InputContent>
                                <InputField
                                    id="district"
                                    type="text"
                                    required
                                    placeholder="Bairro"
                                />

                                <InputError message="Testando mensagem de erro" />
                            </InputContent>
                        </InputRoot>

                        <div className="w-full flex gap-2">
                            <InputRoot isCol>
                                <InputLabel
                                    id="number"
                                    name="Número"
                                    complement="Informe o número"
                                />

                                <InputContent>
                                    <InputField
                                        id="number"
                                        type="text"
                                        required
                                        placeholder="Número"
                                    />

                                    <InputError message="Testando mensagem de erro" />
                                </InputContent>
                            </InputRoot>

                            <InputRoot isCol>
                                <InputLabel
                                    id="complement"
                                    name="Complement"
                                    complement="Informe o complemento"
                                />

                                <InputContent>
                                    <InputField
                                        id="complement"
                                        type="text"
                                        placeholder="apto, casa, bloco"
                                    />

                                    <InputError message="Testando mensagem de erro" />
                                </InputContent>
                            </InputRoot>
                        </div>
                    </fieldset>

                    <fieldset className="">
                        <h6 className="font-bold text-gray-500 text-xl pb-5 my-5 border-b border-b-gray-100">
                            Método de pagamento
                        </h6>

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
                            </InputContent>
                        </InputRoot>
                    </fieldset>

                    <fieldset className="">
                        <h6 className="font-bold text-gray-500 text-xl pb-5 my-5 border-b border-b-gray-100">
                            Dados do cartão
                        </h6>

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

                                <InputError message="Testando mensagem de erro" />
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
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Nome..."
                                />

                                <InputError message="Testando mensagem de erro" />
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

                                <InputError message="Testando mensagem de erro" />
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

                                    <InputError message="Testando mensagem de erro" />
                                </InputContent>

                                <hr className="w-10 h-auto bg-gray-300 rotate-[110deg]" />

                                <InputContent customClass="!w-20 sm:!w-40">
                                    <InputField
                                        id="expiry-year"
                                        type="text"
                                        required
                                        placeholder="00"
                                    />

                                    <InputError message="Testando mensagem de erro" />
                                </InputContent>
                            </InputContent>
                        </InputRoot>
                    </fieldset>

                    <div className="flex flex-col gap-4 mt-8">
                        <LinkButton
                            variant="secondary"
                            customClass="!w-full"
                            link="/"
                        >
                            Selecionar
                        </LinkButton>

                        <Button customClass="!w-full"> Pague agora </Button>
                    </div>
                </form>
            </CardPageLeft>

            <CardPageRight>
                <TicketRoot>
                    <TicketPaymentCreditCard
                        cardNumber="677189135113511"
                        cardholderName="Matheus silva"
                        expirationMonth="10"
                        expirationYear="30"
                    />

                    <TicketContent>
                        <TicketItem item="Empresa" value="Empresa tal" />
                        <TicketItem item="Processo" value="Empresa tal" />
                        <TicketItem item="Produto" value="Empresa tal" />
                    </TicketContent>

                    <TicketDivider />

                    <TicketFooter price={46.69} />
                </TicketRoot>
            </CardPageRight>
        </CardPageRoot>
    )
}
