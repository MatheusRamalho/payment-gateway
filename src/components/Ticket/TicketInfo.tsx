import { Icon } from '../Icon'

interface TicketInfoProps {
    flight: string
    flightDate: string

    boardingCity: string
    boardingAcronym: string
    boardingTime: string

    landingCity: string
    landingAcronym: string
    landingTime: string
}

export const TicketInfo = ({
    flight,
    flightDate,
    boardingCity,
    boardingAcronym,
    boardingTime,
    landingCity,
    landingAcronym,
    landingTime,
}: TicketInfoProps) => {
    return (
        <div className="pt-10 pb-2 px-8 rounded-t-3xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start text-left pb-4 sm:pb-6">
                    <span> Voo </span>
                    <p className="text-gray-800"> {flight} </p>
                </div>

                <div className="flex flex-col pb-4 sm:pb-6 items-end text-right">
                    <span> Data </span>
                    <p className="text-gray-800"> {flightDate} </p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start text-left pb-4 sm:pb-6">
                    <span> {boardingCity} </span>
                    <h1 className="text-gray-800 font-bold text-4xl uppercase">
                        {boardingAcronym}
                    </h1>
                    <p className="text-gray-800"> {boardingTime} </p>
                </div>

                <Icon name="airplay" customClass="w-8 mt-[-1.6rem] ml-8" />

                <div className="flex flex-col pb-4 sm:pb-6 items-end text-right">
                    <span> {landingCity} </span>
                    <h1 className="text-gray-800 font-bold text-4xl uppercase">
                        {landingAcronym}
                    </h1>
                    <p className="text-gray-800"> {landingTime} </p>
                </div>
            </div>
        </div>
    )
}
