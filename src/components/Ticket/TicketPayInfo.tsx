import { Icon } from '../Icon'

interface TicketPayInfoProps {
    boardingTime: string
    terminal: number
    gate: number
    boardingGroup: number
}

export const TicketPayInfo = ({
    boardingTime,
    terminal,
    gate,
    boardingGroup,
}: TicketPayInfoProps) => {
    return (
        <div className="py-8 px-4 sm:pt-8 sm:pb-10 sm:px-8 rounded-br-3xl rounded-bl-3xl">
            <div className="flex items-center justify-between mb-8">
                <div className="">
                    <div className="text-left mb-4">
                        <span> Embarque </span>
                        <p className="w-fit bg-primary-700 font-bold text-gray-800 px-3 py-1 rounded-lg">
                            {boardingTime}
                        </p>
                    </div>

                    <div className="text-left mb-4">
                        <span> Terminal </span>
                        <p className="text-gray-800"> {terminal} </p>
                    </div>

                    <div className="text-left mb-4">
                        <span> Portão </span>
                        <p className="text-gray-800"> {gate} </p>
                    </div>
                </div>

                <div className="flex items-center justify-center flex-col">
                    <Icon name="qr-code" />
                    <span> Grupo de embarque: {boardingGroup} </span>
                </div>
            </div>

            <div className="flex items-center justify-center flex-col">
                <p className="text-gray-800">
                    <strong> Atenção: </strong>o portão fecha {boardingTime}
                </p>
            </div>
        </div>
    )
}
